<template>
    <div>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <button
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
            >
                Bold
            </button>
        </editor-menu-bar>
        <editor-content :editor="editor" />
    </div>
</template>

<script>
// Import the editor
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
} from 'tiptap-extensions'

export default {
    name: 'NoteEditor',
    components: {
        EditorMenuBar,
        EditorContent,
    },
    data() {
        return {
            editor: new Editor({
                extensions: [
                    new Blockquote(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({ levels: [1, 2, 3] }),
                    new BulletList(),
                    new OrderedList(),
                    new ListItem(),
                    new TodoItem(),
                    new TodoList(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Link(),
                    new Strike(),
                    new Underline(),
                    new History(),
                ],
                content: '<p>This is just a boring paragraph</p>',
            }),
        }
    },
    mounted() {},
    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>