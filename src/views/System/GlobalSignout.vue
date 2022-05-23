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
export default {
    name: 'GlobalSignout',
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

