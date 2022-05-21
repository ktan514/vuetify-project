package model

import (
	"github.com/jinzhu/gorm"

	// model.###.goでは使わないが，内部的に使われるためここでimportしておく
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	_ "github.com/mattn/go-sqlite3"
)

var db *gorm.DB

func init() {
	var err error
	db, err = gorm.Open("sqlite3", "db/sample.db")
	if err != nil {
		panic("failed to connect database")
	}

	// 自動マイグレーション：DBの作成
	db.AutoMigrate(&User{})
}
