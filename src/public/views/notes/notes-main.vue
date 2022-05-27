<template>
    <v-main>
        <v-container>
            <v-layout wrap>
                <v-card light class="px-3">
                    <v-card-title>
                        <v-text-field
                            class="headline"
                            label="Topic's title"
                            hint="www.example.com/page"
                            persistent-hint
                            outlined
                        ></v-text-field
                    ></v-card-title>

                    <v-divider class="ma-3"></v-divider>

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
//import quillEditor from '@/components/notes/view-note-editor.vue'
import quillEditor from '@/components/notes/view-small-editor.vue'

export default {
    name: routerConfig.siteMap.notes.name,
    components: {
        //https://quilljs.com/docs/quickstart/
        quillEditor,
    },
}
</script>