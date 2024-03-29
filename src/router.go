package main

import (
	"vuetify-project/src/service/handler"

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

	e.POST("/signup", handler.Signup) // POST /signup
	e.POST("/signin", handler.Login)  // POST /signin

	//api 下はJWTの認証が必要
	api := e.Group("/api")
	api.Use(middleware.JWTWithConfig(handler.Config))
	api.POST("/requestAuth", handler.RequestAuth)

	return e
}
