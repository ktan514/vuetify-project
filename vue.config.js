const {
	defineConfig
} = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
	transpileDependencies: true,
	pages: {
		index: {
			entry: './src/public/main.js',
			filename: 'index.html'
		}
	},
	outputDir: './dist',
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/public'),
				'@views': path.resolve(__dirname, './src/public/views')
			}
		}
	},
})