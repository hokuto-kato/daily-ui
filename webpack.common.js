const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin")
const globule = require("globule")
const copyPlugin = require("copy-webpack-plugin")
const pug = globule.find("./src/pug/*.pug", {
	ignore: ["./src/pug/include/*.pug"],
})
const dailyID = 5
const dalyIDPad = String(dailyID).padStart(2, "0")
const buildPath = `${__dirname}/docs/${dalyIDPad}/`
const yellow = "\u001b[33m"

console.log(`${yellow}daily ID = ${dalyIDPad} `)

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
			inject: true,
			alwaysWriteToDisk: true,
			favicon: `./src/favicon/favicon.ico`
		}),
	)
})

module.exports = app