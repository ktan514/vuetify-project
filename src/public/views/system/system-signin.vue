<template>
    <!-- コンテンツ -->
    <v-main>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="userName"
                    label="ユーザー名"
                    id="username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    label="パスワード"
                    id="password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="signin" color="primary">サインイン</v-btn>
        </v-card-actions>
    </v-main>
</template>

<script>
import routerConfig from '@/router/router-config'

export default {
    name: routerConfig.siteMap['signin'],
    data() {
        return {
            userName: '',
            password: '',
        }
    },
    methods: {
        signin: function () {
            const url = '/signin'
            const method = 'POST'
            const headers = {
                'Content-Type': 'application/json; charset=UTF-8',
            }
            const body = JSON.stringify({
                name: this.userName,
                password: this.password,
            })

            alert('サインイン認証を行います。')

            fetch(url, { method, headers, body })
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert('Failed to login. Please retry')
                        this.userName = ''
                        this.password = ''
                        return { token: '' }
                    }
                })
                .then((json) => {
                    const token = json.token
                    if (token.length > 0) {
                        // Cookieのようなクライアントのデータ保存用ストレージ。
                        // Cookieより容量が大きく(5MB)利用時に必要なデータのみ取り出せる。
                        localStorage.setItem('token', token)
                        //location.href = '/menu'
                        alert('ログインします')
                        this.$router.push('/')
                    }
                })
                .catch((error) => {
                    console.error('通信に失敗しました', error)
                })
        },
    },
}
</script>

