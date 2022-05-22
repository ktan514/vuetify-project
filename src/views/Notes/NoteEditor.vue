<template>
  <div>
    <quillEditor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
    />
  <div>
</template>

<script>
// [vue-quill-editor]
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
// [katex] for Formula
import katex from 'katex'
import 'katex/dist/katex.min.css'
// [syntax]
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

export default {
    components: {
        //https://quilljs.com/docs/quickstart/
        quillEditor,
    },
    data: () => ({
        content: 'Hello World',
        editorOption: {
            theme: 'snow',
            modules: {
                syntax: {
                    highlight: (text) => hljs.highlightAuto(text).value,
                },
                formula: true, // Include formula module
                history: {
                    // Enable with custom configurations
                    delay: 2500,
                    userOnly: true,
                },
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                    ['blockquote', 'code-block'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                    [{ direction: 'rtl' }], // text direction

                    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],

                    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                    [{ font: [] }],
                    [{ align: [] }],

                    ['image', 'video', 'link', 'formula'], // formula (requires KaTex)

                    ['clean'], // remove formatting button
                ],
            },
        },
    }),
    mounted() {
        window.katex = katex
        hljs.configure({
            // optionally configure hljs
            languages: [
                'c',
                'cpp',
                'css',
                'go',
                'html',
                'java',
                'javascript',
                'python',
                'ruby',
            ],
        })
    },
}
</script>