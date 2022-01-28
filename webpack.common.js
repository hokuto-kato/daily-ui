const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin")
const globule = require("globule")
const copyPlugin = require("copy-webpack-plugin")
const pug = globule.find("./src/pug/*.pug", {
	ignore: ["./src/pug/include/*.pug"],
})
const dailyID = "02"
const buildPath = `${__dirname}/docs/${dailyID}/`
const yellow = "\u001b[33m"

console.log(`${yellow}daily ID = ${dailyID} `)

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
	resolve: {
		extensions: [".js", ".json", ".scss", ".css", ".pug", ".html"],
		alias: {
			"~": `${__dirname}/src`,
		},
		roots: [`${__dirname}/src`],
	},
	plugins: [
		new HtmlWebpackHarddiskPlugin({
			outputPath: buildPath,
		}),
		new copyPlugin({
			patterns: [
				{
					from: `${__dirname}/src/favicon/favicon.ico`,
					to: `${buildPath}/favicon/`,
				},
			],
		}),
	],
}

//pugファイルがある分だけhtmlに変換する
pug.forEach((template) => {
	const fileName = template.replace("./src/pug/", "").replace(".pug", ".html")
	app.plugins.push(
		new HtmlWebpackPlugin({
			filename: `${fileName}`,
			template: template,
			inject: true, //jsとcssの読み込みを挿入する
			alwaysWriteToDisk: true,
		}),
	)
})

module.exports = app