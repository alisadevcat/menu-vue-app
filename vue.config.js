//console.log(process.VUE_CLI_SERVICE.mode);
const path = require('path');

module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	publicPath: '/',
	chainWebpack: config => {
		const oneOfsMap = config.module.rule('scss').oneOfs.store
		oneOfsMap.forEach(item => {
		  item
			.use('sass-resources-loader')
			.loader('sass-resources-loader')
			.options({
				hoistUseStatements: true,
			  // Provide path to the file with resources
			  resources: './src/assets/sass/app.scss',
			  // Or array of paths
			 //resources: ['./src/assets/sass/variables.scss','./src/assets/sass/base.scss','./src/assets/sass/breakpoints.scss','./src/assets/sass/grid.scss','./src/assets/sass/colors.scss']
			})
			.end()
		})
	  }
}