package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/wallace5303/ee-go/ehelper"
	"github.com/wallace5303/ee-go/elog"
	"net"
	"net/http"
	"os/exec"
	"runtime"
	"strconv"
	"strings"
)

// ServerObj 表示服务器对象
type ServerObj struct {
	IP   string `json:"ip"`
	Port int    `json:"port"`
}

var (
	address string
)

// Ping 处理 ping 请求
func Ping(gc *gin.Context) {
	ret := ehelper.GetJson()
	ret.Data = address
	ret.Msg = "OK"
	defer gc.JSON(http.StatusOK, ret)
	return
}

// Start 启动服务器并返回监听端口的 JSON 对象
func (s *ServerObj) Start() string {
	address = s.IP + ":" + strconv.Itoa(s.Port)
	listener, err := net.Listen("tcp", address)
	if err != nil {
		return "监听失败"
	}
	elog.Logger.Info("C&C server listen at : " + s.IP + ":" + strconv.Itoa(s.Port))
	defer listener.Close()

	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("接受连接失败:", err)
			continue
		}
		defer conn.Close()
	}
}

func getServiceByPort(port int) (string, error) {
	var cmdStr string
	if runtime.GOOS == "windows" {
		cmdStr = fmt.Sprintf("netstat -ano | findstr :%d", port)
	} else {
		cmdStr = fmt.Sprintf("\"lsof -i:%d\"", port)
	}
	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		cmd = exec.Command("cmd", "/C", cmdStr)
		//getProcessByPid("")
	} else {
		cmd = exec.Command("sh", "-c", fmt.Sprintf("%s", cmdStr))
	}
	output, err := cmd.CombinedOutput()
	fmt.Println("output ", string(output))
	if err != nil {
		fmt.Println("Error:", err)
	}

	lines := strings.Split(string(output), "\n")
	if len(lines) == 0 {
		return "", fmt.Errorf("no process found on port %d", port)
	}

	for _, line := range lines {
		if strings.Contains(line, fmt.Sprintf(".%d", port)) {
			fields := strings.Fields(line)
			fmt.Println("field: ", fields)
			if runtime.GOOS == "windows" {
				return fields[len(fields)-1], nil
			} else {
				return fields[len(fields)-1], nil
			}
		}
	}

	return "", fmt.Errorf("no process found on port %d", port)
}

func getProcessByPid(pid string) {
	var cmdStr string
	if runtime.GOOS == "windows" {
		cmdStr = fmt.Sprintf("tasklist | findstr %s", pid)
	}
	fmt.Println(cmdStr)
	return
}

func Restart(gc *gin.Context) {
	var s *ServerObj
	s = new(ServerObj)
	port := gc.Query("port")
	if port == "" {
		s.Port = 3456
	} else {
		parsedPort, err := strconv.Atoi(port)
		if err != nil {
			// 如果转换失败，返回错误信息
			gc.JSON(http.StatusBadRequest, gin.H{"error": "Invalid port"})
			return
		}
		if parsedPort >= 1 && parsedPort <= 65535 {
			s.Port = parsedPort
		} else {
			gc.JSON(http.StatusBadRequest, gin.H{"error": "over range port"})
		}

	}
	process, err := getServiceByPort(s.Port)
	if err != nil {
		return
	}
	fmt.Println("process:", process)
	//s.Start()
}
