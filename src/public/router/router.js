import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router-config.js'

Vue.use(Router)

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

function loadView(vueFile) {
	console.log('view名：' + `@views/${vueFile}.vue`)
	return () => import( /* webpackChunkName: "view-[request]" */ `@views/${vueFile}.vue`)
}

let routes = []
for (let key in routerConfig.siteMap) {
	let site = routerConfig.siteMap[key]
	routes.push({
		path: site.path,
		name: site.name,
		component: loadView(site.file),
		meta: {
			requiresAuth: site.meta.requiresAuth,
		},
	})
}


let router = new Router({
	mode: 'history',
	routes: routes,
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