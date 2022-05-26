<template>
    <v-card color="grey lighten-4" flat height="80px" tile>
        <!-- ツールバーを表示します。 -->
        <v-toolbar>
            <!-- ハンバーガーメニューアイコン -->
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <!-- ツールバーのタイトル -->
            <v-toolbar-title>ツールバータイトル</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- 検索アイコン -->
            <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
            <!-- ドットメニューアイコン -->
            <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {}
</script>

