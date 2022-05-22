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
window.katex = katex
import 'katex/dist/katex.min.css'
// [syntax]
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
//import { container } from 'webpack'

//import quillConfig from './quill-config.js'

// TODO 取り消し線のショートカット（その他のアイコンにもショートカット付けたい）
const keybindings = {
    custom_1: {
        key: 'S',
        ctrlKey: true,
        handler: (range, context) => {
            console.log(`ctrl-S KEY PRESSED! ${range} ${context}}`)
        },
    },
}

function initButton() {
    console.log('start initButton()')

    let revoke = document.querySelector('.ql-revoke')
    let redo = document.querySelector('.ql-redo')
    let Front = document.createElement('i')
    let after = document.createElement('i')
    Front.className = 'el-icon-refresh-left'
    after.className = 'el-icon-refresh-right'
    Front.style.cssText = 'font-size:3px'
    after.style.cssText = 'font-size:3px'
    Front.innerHTML = CustomUndo()
    after.innerHTML = CustomRedo()
    revoke.appendChild(Front)
    redo.appendChild(after)
}

const CustomUndo = () => {
    // SVGタグについて
    // http://defghi1977.html.xdomain.jp/tech/svgMemo/svgMemo_03.htm
    // SVG描画サンプルについて
    // https://iconsvg.xyz/
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"/></svg>`
}

// Redo button icon component for Quill editor
const CustomRedo = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>`
}

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
                toolbar: {
                    container: [
                        ['revoke', 'redo'],

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
                    handlers: {
                        revoke: () => {
                            // TODO UNDOボタンを押したときの動作が未対応
                            //this.btnundo()
                            console.log('undo(revoke)')
                        },
                        redo: () => {
                            // TODO REDOボタンを押したときの動作が未対応
                            //this.btnRedo()
                            console.log('redo')
                        },
                    },
                },
                // Any modules here will be declared in HTML quill editor instance
                keyboard: {
                    bindings: keybindings,
                },
            },
        },
    }),
    mounted() {
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

        // Initialize the button parts on the toolbar.
        initButton()
    },
}
</script>

<style>
p {
    margin: 10px;
}

.edit_container,
.quill-editor {
    height: 300px;
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: '14px';
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: '32px';
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'デフォルト';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'monospace';
}
</style>