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
            <v-btn @click="signup" color="primary">サインアップ</v-btn>
        </v-card-actions>
    </v-main>
</template>

<script>
export default {
    name: 'GlobalSignup',
    data() {
        return {
            userName: '',
            password: '',
        }
    },
    methods: {
        signup: function () {
            const url = '/signup'
            const method = 'POST'
            const headers = {
                'Content-Type': 'application/json; charset=UTF-8',
            }
            const body = JSON.stringify({
                name: this.userName,
                password: this.password,
            })

            alert('サインアップ認証を行います。')

            fetch(url, { method, headers, body })
                .then((response) => {
                    if (response.status === 400) {
                        alert('Name or Password are empty. Please retry')
                    } else if (response.status === 409) {
                        alert('Name already exists. Please retry')
                        this.name = ''
                        this.password = ''
                    } else if (response.status === 201) {
                        this.$router.push('/GlobalSignin')
                    }
                })
                .catch((error) => {
                    console.error('通信に失敗しました', error)
                })
        },
    },
}
</script>

