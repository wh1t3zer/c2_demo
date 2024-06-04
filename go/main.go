package main

import (
	"electron-egg/api"
	"embed"

	"github.com/wallace5303/ee-go/eboot"

	"electron-egg/router"
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

	serverObj := api.ServerObj{IP: "127.0.0.1", Port: 3456}
	serverObj.Start()

	// ee-go runtime

	ego.Run()

}
