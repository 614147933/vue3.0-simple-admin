const path = require('path');

const resolve = (directory) => path.join(__dirname, directory);

module.exports = {
	publicPath: './',
	assetsDir: 'assets',
	devServer: {
		port: 8888,
	},
	chainWebpack: (config) => {
		// 设定路径映射
		config.resolve.alias
		.set('@', resolve('src'))
		.set('{assets}', resolve('src/assets'))
		.set('{components}', resolve('src/components')),

		// 更改 HTML 的默认 document.title
		config.plugin('html').tap((args) => {
			args[0].title = '熊宏杰 - 项目';
			return args;
		});

		config.mode = 'production';
	},
};
