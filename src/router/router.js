import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(viewName) {
    return () => import( /* webpackChunkName: "view-[request]" */ `@/views/${viewName}.vue`)
}

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'SampleHome',
            component: loadView('SampleHome')
        },
        {
            path: '/SamplePage',
            name: 'SamplePage',
            component: loadView('SamplePage')
        },
        {
            path: '/GlobalSignin',
            name: 'GlobalSignin',
            component: loadView('GlobalSignin')
        },
        {
            path: '/GlobalSignup',
            name: 'GlobalSignup',
            component: loadView('GlobalSignup')
        }
    ],
})