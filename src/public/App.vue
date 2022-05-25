<template>
    <v-app>
        <!-- ヘッダー -->
        <GlobalHeader />

        <!-- コンテンツ -->
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import GlobalHeader from '@/components/header/GlobalHeader.vue'
export default {
    components: {
        GlobalHeader,
    },
}
</script>