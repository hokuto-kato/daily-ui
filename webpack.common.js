const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const globule = require("globule")
const copyPlugin = require("copy-webpack-plugin")
const pug = globule.find("./src/pug/*.pug", {
	ignore: ["./src/pug/include/*.pug"],
})
const dailyId = "01"
const buildPath = `${__dirname}/docs/${dailyId}/`
const buildPathRoot = `${__dirname}/docs/`

const app = {
	target: ["web", "es6"],
	devServer: {
		static: buildPath,
		open: true,
		hot: true,
	},
	entry: {
		app: `./src/js/app.js`,
	},
	output: {
		clean: true,
		path: buildPath,
		filename: "./js/[name].[contenthash].js",
	},
	module: {
		rules: [
			{
				test: /\.pug$/i,
				loader: "pug-loader",
				options: {
					pretty: true,
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackHarddiskPlugin(),
		new MiniCssExtractPlugin({
			filename: "./css/[name].[contenthash].css",
		}),
		new copyPlugin({
			patterns: [
				{
					from: `${__dirname}/src/favicon/favicon.ico`,
					to: buildPathRoot,
				},
			],
		}),
	],
}

//pugファイルがある分だけhtmlに変換する
pug.forEach((template) => {
	const fileName = template.replace("./src/pug/", "").
		replace(".pug", ".html")
	app.plugins.push(
		new HtmlWebpackPlugin({
			filename: `${fileName}`,
			template: template,
			inject: true, //jsとcssの読み込みを挿入するか
			minify: true, //圧縮する
			alwaysWriteToDisk: true,
		}),
	)
})

module.exports = app