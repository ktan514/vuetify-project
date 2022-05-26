<template>
    <v-app>
        <!-- ヘッダー -->
        <GlobalHeader />

        <!-- コンテンツ -->
        <router-view />
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