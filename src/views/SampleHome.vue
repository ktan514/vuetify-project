<template>
    <!-- コンテンツ -->
    <v-main>
        <h1>ホーム画面</h1>
        <ul>
            <li>
                <router-link to="/GlobalSignin">Go to Signin</router-link>
            </li>
            <li>
                <router-link to="/GlobalSignup">Go to Signup</router-link>
            </li>
            <li>
                <router-link to="/SamplePage">Go to Sample Page</router-link>
            </li>
        </ul>
    </v-main>
</template>


<script>
export default {
    name: 'SampleHome',
}
</script>