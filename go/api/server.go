package api

import (
	"context"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/wallace5303/ee-go/ehelper"
	"github.com/wallace5303/ee-go/elog"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"syscall"
	"time"
)

// ServerObj 表示服务器对象
type ServerObj struct {
	IP       string       `json:"ip"`
	Port     int          `json:"port"`
	Listener net.Listener `json:"-"`
	Server   *http.Server `json:"-"`
}

var (
	defaultPort = 3456
	address     string
	server      *ServerObj
)

// Ping 处理 ping 请求
func Ping(gc *gin.Context) {
	ret := ehelper.GetJson()
	ret.Data = address
	ret.Msg = "OK"
	defer gc.JSON(http.StatusOK, ret)
	return
}

// Start 启动服务器
func (s *ServerObj) Start() {
	address = s.IP + ":" + strconv.Itoa(s.Port)
	listener, err := net.Listen("tcp", address)
	if err != nil {
		elog.Logger.Info("监听失败: " + err.Error())
		return
	}
	s.Listener = listener
	elog.Logger.Info("Server listen at : " + address)

	s.Server = &http.Server{}
	go func() {
		if err := s.Server.Serve(listener); err != nil && err != http.ErrServerClosed {
			elog.Logger.Fatalf("Server listen: %s\n", err)
		}
	}()
}

// Stop 停止服务器
func (s *ServerObj) Stop() {
	if s.Server != nil {
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		if err := s.Server.Shutdown(ctx); err != nil {
			elog.Logger.Fatalf("Server Shutdown: %s\n", err)
		}
		elog.Logger.Info("Server stopped at : " + s.IP + ":" + strconv.Itoa(s.Port))
	}
}

// Restart 重启服务器
func Restart(port int) error {
	// 停止默认端口的服务器
	defaultServer := &ServerObj{IP: "127.0.0.1", Port: defaultPort}
	defaultServer.Stop()

	// 启动指定端口的服务器
	newServer := &ServerObj{IP: "127.0.0.1", Port: port}
	newServer.Start()

	// 更新全局 server 对象
	server = newServer
	return nil
}

// RestartHandle 处理重启请求
func RestartHandle(gc *gin.Context) {
	portStr := gc.Query("port")
	port := defaultPort
	var err error

	if portStr != "" {
		port, err = strconv.Atoi(portStr)
		if err != nil {
			gc.JSON(http.StatusBadRequest, gin.H{"error": "Invalid port"})
			return
		}
	}

	if port == defaultPort {
		gc.JSON(http.StatusBadRequest, gin.H{"error": "Service is already running on port 3456"})
		return
	}

	err = Restart(port)
	if err != nil {
		gc.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	gc.JSON(http.StatusOK, gin.H{"message": fmt.Sprintf("Server restarted on port %d", port)})
}

// InitServer 初始化服务器
func InitServer(ip string, port int) *ServerObj {
	server = &ServerObj{IP: ip, Port: port}
	server.Start()

	// Wait for interrupt signal to gracefully shutdown the server with a timeout of 5 seconds.
	quit := make(chan os.Signal)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-quit
		server.Stop()
	}()
	return server
}
