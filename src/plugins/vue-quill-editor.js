import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'katex/dist/katex.min.css'
import Katex from 'katex'

Vue.use(VueQuillEditor)

Vue.use(Katex, {
	globalOptions: {
		//... Define globally applied KaTeX options here
	}
});