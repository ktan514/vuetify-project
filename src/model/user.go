package model

type User struct {
	// 大文字にしなければ値が取得できない
	ID       int    `json:"id" gorm:"praimaly_key"`
	Name     string `json:"name"`
	Password string `json:"password"`
}

func CreateUser(user *User) {
	db.Create(user)
}

func FindUser(u *User) User {
	var user User
	db.Where(u).First(&user)
	return user
}
