<template>
    <quillEditor v-model="content" :options="editorOption" />
</template>


<script>
// [quill]
import Quill from 'quill'
// [vue-quill-editor]
import { quillEditor } from 'vue-quill-editor'
// [table]
import quillBetterTable from 'quill-better-table'

Quill.register(
    {
        'modules/better-table': quillBetterTable,
    },
    true
)

// The vue-quill-editor module, table cell.
var tableOptions = []
var maxRows = 7
var maxCols = 7
for (let r = 1; r <= maxRows; r++) {
    for (let c = 1; c <= maxCols; c++) {
        tableOptions.push('newtable_' + r + '_' + c)
    }
}

export default {
    // https://jsfiddle.net/Rudy_Hascouet/qzcj07an/
    components: {
        //https://quilljs.com/docs/quickstart/
        quillEditor,
    },
    data() {
        return {
            content: 'Hello World',
            editorOption: {
                theme: 'snow',
                modules: {
                    //table: true,
                    table: false, // disable table module
                    'better-table': {
                        operationMenu: {
                            items: {
                                unmergeCells: {
                                    text: 'Another unmerge cells name',
                                },
                            },
                            color: {
                                colors: ['#fff', 'red', 'rgb(0, 0, 0)'], // colors in operationMenu
                                text: 'Background Colors', // subtitle
                            },
                        },
                    },
                    toolbar: {
                        container: [{ 'Table-Input': tableOptions }],
                    },

                    // // Any modules here will be declared in HTML quill editor instance
                    // keyboard: {
                    //     //bindings: keybindings,
                    //     bindings: quillBetterTable.keyboardBindings,
                    // },
                },
            },
        }
    },
    methods: {
        sendContext() {
            console.log(`send message {${this.content}}.`)
        },
    },
    mounted() {
        console.log(`[DBG] {${quillBetterTable.keyboardBindings}}.`)

        let curQuillDiv = document.querySelector('.quill-editor')
        console.log(`[DBG] {${curQuillDiv}}.`)

        let curTableIconSpan = document.querySelector(
            '.ql-Table-Input.ql-picker'
        )
        console.log(`[DBG] {${curTableIconSpan}}.`)

        curTableIconSpan.innerHTML =
            '<svg style="right: 4px;" viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class="ql-fill ql-transparent"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>'

        var curTableCellIconSpans = document
            .querySelector(curTableIconSpan.parentNode.childNodes[1])
            .children()
        console.log(`[DBG] {${curTableCellIconSpans}}.`)

        // curTableCellIconSpans.click(
        //     (function () {
        //         var curQuillBetterTable = document.getModule('better-table')
        //         //var curQuillToolbar = document.getModule('toolbar')
        //         return function () {
        //             var curRowIndex = Number(
        //                 this.dataset.value.substring(9).split('_')[0]
        //             )
        //             var curColIndex = Number(
        //                 this.dataset.value.substring(9).split('_')[1]
        //             )
        //             curQuillBetterTable.insertTable(curRowIndex, curColIndex)
        //             // The following two lines have been added, thinking that it would fix the issue of keeping the icon in blue color.  However Quill keeps adding the classes back, so this fix doesn't work.

        //             document
        //                 .parent()
        //                 .parent()
        //                 .find('.ql-selected')
        //                 .removeClass('ql-selected')
        //             document
        //                 .parent()
        //                 .parent()
        //                 .find('.ql-active')
        //                 .removeClass('ql-active')
        //         }
        //     })()
        // )

        // curTableCellIconSpans.hover(function () {
        //     var curRowIndex = Number(
        //         this.dataset.value.substring(9).split('_')[0]
        //     )
        //     var curColIndex = Number(
        //         this.dataset.value.substring(9).split('_')[1]
        //     )
        //     document
        //         .parent()
        //         .children()
        //         .each(
        //             (function () {
        //                 var curRowIndex1 = curRowIndex
        //                 var curColIndex1 = curColIndex
        //                 return function () {
        //                     var curRowIndex2 = Number(
        //                         this.dataset.value.substring(9).split('_')[0]
        //                     )
        //                     var curColIndex2 = Number(
        //                         this.dataset.value.substring(9).split('_')[1]
        //                     )
        //                     if (
        //                         curRowIndex2 <= curRowIndex1 &&
        //                         curColIndex2 <= curColIndex1
        //                     ) {
        //                         document.addClass('ql-picker-item-highlight')
        //                     }
        //                 }
        //             })()
        //         )
        // })
    },
}
</script>

<style scoped>
</style>
