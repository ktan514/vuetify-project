import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(viewName) {
    console.log('view名：' + viewName)
    return () => import( /* webpackChunkName: "view-[request]" */ `@/views/${viewName}.vue`)
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
            component: loadView('GlobalSignin'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/GlobalSignup',
            name: 'GlobalSignup',
            component: loadView('GlobalSignup'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/GlobalSignout',
            name: 'GlobalSignout',
            component: loadView('GlobalSignout'),
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
        console.log('トークンチェック：' + token)
        if (token === null) {
            // 未ログインならホーム画面に飛ばす。
            console.log('未ログインならホーム画面に飛ばす。')
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            // ログイン済みなら要求画面に飛ばす。
            console.log('ログイン済みなら要求画面に飛ばす。')
            next();
        }
    } else {
        // ログイン不要なら要求画面に飛ばす。
        console.log('ログイン不要なら要求画面に飛ばす。')
        next();
    }
});

export default router