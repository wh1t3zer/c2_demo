package main

import (
	"electron-egg/api"
	"electron-egg/router"
	"embed"
	"github.com/wallace5303/ee-go/eboot"
	"os"
	"os/signal"
	"syscall"
)

var (
	//go:embed public/**
	staticFS embed.FS
)

func main() {
	// Initialize ee-go
	ego := eboot.New(staticFS)

	// User business logic
	router.Api()

	// 初始化并启动服务器
	server := api.InitServer("127.0.0.1", 3456)

	// ee-go runtime
	ego.Run()

	// 处理优雅关闭
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)
	<-stop

	// 停止服务器
	server.Stop()
}
