package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func newRouter() *echo.Echo {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// npm run buildでビルドしたものをgoで起動  corsも不要になる
	//  /でアクセスしたときのルーティング設定
	e.Static("/", "../dist/")

	//e.POST("/login", "login.html")

	// /api 下はJWTの認証が必要
	//api := e.Group("/api")
	//api.Use(middleware.JWTWithConfig(handler.Config))
	//api.PUT("/", )

	return e
}
