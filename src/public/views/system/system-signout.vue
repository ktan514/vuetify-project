<template>
    <!-- コンテンツ -->
    <v-main>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="signout" color="primary">サインアウト</v-btn>
        </v-card-actions>
    </v-main>
</template>

<script>
import routerConfig from '@/router/router-config'

export default {
    name: routerConfig.siteMap['signin'],
    data() {
        return {}
    },
    methods: {
        signout: function () {
            localStorage.setItem('token', null)
            alert('サインアウトしました。')
            this.$router.push('/')
        },
    },
}
</script>

