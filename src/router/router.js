import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(viewName) {
	console.log('view名：' + viewName)
	return () => import( /* webpackChunkName: "view-[request]" */ `@/views/${viewName}.vue`)
}

function checkTokenForRouter(token, to, from, next) {
	console.log('トークンチェック：' + token)

	const url = 'api/requestAuth'
	const method = 'POST'
	const headers = {
		'Authorization': `Bearer ${token}`,
	}

	fetch(url, {
			method,
			headers,
		})
		.then(response => {
			if (response.ok) {
				next()
			}
		})
}

let router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'SampleHome',
			component: loadView('SampleHome'),
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/SamplePage',
			name: 'SamplePage',
			component: loadView('SamplePage'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/GlobalSignin',
			name: 'GlobalSignin',
			component: loadView('System/GlobalSignin'),
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/GlobalSignup',
			name: 'GlobalSignup',
			component: loadView('System/GlobalSignup'),
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/GlobalSignout',
			name: 'GlobalSignout',
			component: loadView('System/GlobalSignout'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/NoteEditor',
			name: 'NoteEditor',
			component: loadView('Notes/NoteEditor'),
			meta: {
				requiresAuth: true
			}
		}
	],
})

/**
 * to : ルーティングの遷移先
 * from : ルーティングの遷移元
 * next : 遷移アクション 
 */
router.beforeEach((to, from, next) => {
	// 画面遷移前に認証チェックを実行する。
	if (to.matched.some(record => record.meta.requiresAuth)) {
		const token = localStorage.getItem('token')

		checkTokenForRouter(token, to, from, next);
	} else {
		// ログイン不要なら要求画面に飛ばす。
		console.log('ログイン不要なら要求画面に飛ばす。')
		next()
	}
});

export default router