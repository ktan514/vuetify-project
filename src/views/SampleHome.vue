<template>
    <!-- コンテンツ -->
    <v-main>
        <h1>ホーム画面</h1>
        <ul>
            <li>
                <router-link v-bind:to="{ path: linkOfSignin }">
                    Go to Signin
                </router-link>
            </li>
            <li>
                <router-link v-bind:to="{ path: linkOfSignup }">
                    Go to Signup
                </router-link>
            </li>
            <li>
                <router-link v-bind:to="{ path: linkOfSignout }">
                    Go to Signout
                </router-link>
            </li>
            <li>
                <router-link v-bind:to="{ path: linkOfNotes }">
                    Go to ノート編集
                </router-link>
            </li>
        </ul>
    </v-main>
</template>


<script>
import routerConfig from '@/router/router-config'

const linkOfSignin = routerConfig.siteMap.signin.path
const linkOfSignout = routerConfig.siteMap.signout.path
const linkOfSignup = routerConfig.siteMap.signup.path
const linkOfNotes = routerConfig.siteMap.notes.path

export default {
    name: routerConfig.siteMap['home'],
    data() {
        return {
            linkOfSignin,
            linkOfSignout,
            linkOfSignup,
            linkOfNotes,
        }
    }
}
</script>