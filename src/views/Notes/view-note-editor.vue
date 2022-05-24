<template>
    <div>
        <quillEditor v-model="content" :options="editorOption" />
    </div>
</template>

<script>
// [vue-quill-editor]
import { quillEditor } from 'vue-quill-editor'
// [katex] for Formula
import katex from 'katex'
window.katex = katex
import 'katex/dist/katex.min.css'
// [syntax]
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
// [table]
import 'quill-table-module'

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
    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    // a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
    //
    // [丸矢印]
    // M 2.5 2
    // v 6
    // h 6
    // M 2.66 15.57
    // a 10 10 0 1 0 .57 -8.38
    return `<svg viewBox="0 0 18 18">
		<path class="ql-stroke" d="M 17,9 a 8 8 0 1 1 -4,-7"/>
		<path class="ql-stroke" d="M2.5 2v6h6"/>
	</svg>`
}

// Redo button icon component for Quill editor
const CustomRedo = () => {
    return `<svg viewBox="0 0 18 18"><path class="ql-stroke" d="M21.5 2v6h-6M21.34 15.57a5 5 0 1 1 0 0"/></svg>`
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
                table: true,
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

                        // toggled buttons
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ font: [] }, { align: [] }],
                        [{ color: [] }, { background: [] }], // dropdown with defaults from theme

                        // coding
                        ['blockquote', 'code-block'],

                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                        [{ direction: 'rtl' }], // text direction

                        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],

                        // media
                        ['image', 'video', 'link', 'formula'],

                        // remove formatting button
                        ['clean'],

                        // table
                        [
                            {
                                table: [
                                    'newtable_1_1',
                                    'newtable_1_2',
                                    'newtable_1_3',
                                    'newtable_1_4',
                                    'newtable_1_5',
                                    'newtable_2_1',
                                    'newtable_2_2',
                                    'newtable_2_3',
                                    'newtable_2_4',
                                    'newtable_2_5',
                                    'newtable_3_1',
                                    'newtable_3_2',
                                    'newtable_3_3',
                                    'newtable_3_4',
                                    'newtable_3_5',
                                    'newtable_4_1',
                                    'newtable_4_2',
                                    'newtable_4_3',
                                    'newtable_4_4',
                                    'newtable_4_5',
                                    'newtable_5_1',
                                    'newtable_5_2',
                                    'newtable_5_3',
                                    'newtable_5_4',
                                    'newtable_5_5',
                                    'newtable_6_1',
                                    'newtable_6_2',
                                    'newtable_6_3',
                                    'newtable_6_4',
                                    'newtable_6_5',
                                    'newtable_7_1',
                                    'newtable_7_2',
                                    'newtable_7_3',
                                    'newtable_7_4',
                                    'newtable_7_5',
                                    'newtable_8_1',
                                    'newtable_8_2',
                                    'newtable_8_3',
                                    'newtable_8_4',
                                    'newtable_8_5',
                                    'newtable_9_1',
                                    'newtable_9_2',
                                    'newtable_9_3',
                                    'newtable_9_4',
                                    'newtable_9_5',
                                    'newtable_10_1',
                                    'newtable_10_2',
                                    'newtable_10_3',
                                    'newtable_10_4',
                                    'newtable_10_5',
                                ],
                            },
                            { table: 'append-row' },
                            { table: 'append-col' },
                        ],
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