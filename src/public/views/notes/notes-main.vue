<template>
    <v-main>
        <v-container>
            <v-layout wrap>
                <v-text-field
                    label="Your landing page"
                    hint="www.example.com/page"
                    persistent-hint
                    outlined
                ></v-text-field>

                <v-card dark class="px-3">
                    <v-card-title class="headline">トピック編集</v-card-title>
                    <v-card-subtitle>card subtitle</v-card-subtitle>
                    <v-divider class="mx-3"></v-divider>

                    <v-spacer class="my-10"></v-spacer>

                    <quillEditor />

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn small>OK</v-btn>
                        <v-btn x-small>Cancel</v-btn>
                        <v-btn small @click="sendContext">投稿</v-btn>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-container>
    </v-main>
</template>

<script>
import routerConfig from '@/router/router-config'
import quillEditor from '@/components/notes/view-note-editor.vue'

export default {
    name: routerConfig.siteMap.notes.name,
    components: {
        //https://quilljs.com/docs/quickstart/
        quillEditor,
    },
}
</script>