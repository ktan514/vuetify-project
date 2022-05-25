// src/plugins/plugin-vue-quill-editor.js

import VueQuillEditor from 'vue-quill-editor'
//import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'katex/dist/katex.min.css'

// テーブルモジュールを追加
const quillTable = require('quill-table-module');
VueQuillEditor.Quill.register(quillTable.TableCell);
VueQuillEditor.Quill.register(quillTable.TableRow);
VueQuillEditor.Quill.register(quillTable.Table);
VueQuillEditor.Quill.register(quillTable.Contain);
VueQuillEditor.Quill.register('modules/table', quillTable.TableModule);