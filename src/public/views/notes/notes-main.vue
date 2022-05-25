<template>
    <div>
        <div>
            <noteEditor />
        </div>
        <v-card-actions>
            <v-btn @click="post" color="primary">投稿</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import noteEditor from '@/components/notes/view-note-editor.vue'
import routerConfig from '@/router/router-config'

export default {
    name: routerConfig.siteMap['notes'],
    components: {
        noteEditor,
    },
    methods: {
        post: function () {
            console.log('作成したページを投稿します。')
        },
    },
}
</script>
