<template>
    <v-container>
        <p>エディタ</p>
        <quillEditor v-model="content" :options="editorOption" />
    </v-container>
</template>

<script src = "./quill-config.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src = "./quill-config.css"></style>
