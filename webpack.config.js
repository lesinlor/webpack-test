var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',//生成source maps

	entry:{
		bundle: __dirname + '/app/main.js',//打包的入口js
		vendor: ['react','react-dom']
	},

	output: {
		path: __dirname + '/public',//打包后存放的位置
		filename: "bundle.js"//打包后输出的文件名
	},
	module: {
		loaders:[
			{test: /\.json$/,loader: "json"},
			{test: /\.js$/,loader: 'babel',exclude: /node_modules/,
				query: {
					presets: ['es2015','react']
				}

			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js')
	],
	devServer: {
	    contentBase: "public",//本地服务器所加载的页面所在的目录
	    // colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新
	    port:8080,
	    host: '0.0.0.0'
	}
}