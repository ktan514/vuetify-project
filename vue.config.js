const { defineConfig } = require('@vue/cli-service')

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
			}
		}
	},
})
