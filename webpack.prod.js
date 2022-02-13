const { merge } = require("webpack-merge")
const common = require("./webpack.common")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer")
const TerserPlugin = require("terser-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const dailyID = 17
const dalyIDPad = String(dailyID).padStart(2, "0")
const buildPath = `${__dirname}/docs/${dalyIDPad}/`

module.exports = merge(common, {
	mode: "production",
	output: {
		clean: true,
		path: buildPath,
		filename: "./js/[name].[contenthash].js",
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
					compress: {
						drop_console: true,
					},
				},
				extractComments: false,
			}),
			new ImageMinimizerPlugin({
				test: /\.(gif|svg)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["gifsicle", {}],
							["svgo", {}],
						],
					},
				},
			}),
			new ImageMinimizerPlugin({
				test: /\.(png)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [["pngquant", {
							speed: 1,
						}]],
					},
				},
			}),
			new ImageMinimizerPlugin({
				test: /\.(jpe?g)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				type: "asset/resource",
				generator: {
					filename: "./img/[name].[contenthash][ext]",
				},
			},
			{
				test: /\.(sass|scss)$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							url: true,
							sourceMap: false,
							importLoaders: 2,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									autoprefixer({
										grid: true,
										flexbox: true,
									}),
								],
							},
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: false,
						},
					},
				],
			},
			{
				test: /\.pug$/i,
				loader: "pug-loader",
				options: {
					pretty: false,
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/[name].[contenthash].css",
		}),
	],
})
