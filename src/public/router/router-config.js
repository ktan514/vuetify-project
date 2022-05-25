const Defined = {
	NOLOG: false, // ログインが必要
	LOGIN: true, // ログイン不要
}

const siteMap = {
	home: {
		path: '/',
		name: 'SampleHome',
		file: 'SampleHome',
		meta: {
			requiresAuth: Defined.NOLOG
		}
	},
	signin: {
		path: '/SystemSignin',
		name: 'SystemSignin',
		file: 'system/system-signin',
		meta: {
			requiresAuth: Defined.NOLOG
		}
	},
	signout: {
		path: '/SystemSignout',
		name: 'SystemSignout',
		file: 'system/system-signout',
		meta: {
			requiresAuth: Defined.LOGIN
		}
	},
	signup: {
		path: '/SystemSignup',
		name: 'SystemSignup',
		file: 'system/system-signup',
		meta: {
			auto: Defined.NOLOG
		}
	},
	notes: {
		path: '/NotesMain',
		name: 'NotesMain',
		file: 'notes/notes-main',
		meta: {
			requiresAuth: Defined.LOGIN
		}
	},
}



export default {
	siteMap,
}