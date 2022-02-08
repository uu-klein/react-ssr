/*
 * @Author: Klien
 * @Date: 2022-02-05 13:28:07
 * @LastEditTime: 2022-02-08 09:43:28
 * @LastEditors: Klien
 */
const clientPath = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
	name: 'client',
	entry: {
		client: clientPath.resolve(__dirname, '../../../app', 'client/index.tsx'),
	},
	mode: 'production',
	output: {
		path: clientPath.resolve(__dirname, '../../../dist/static'),
		filename: '[name].[contenthash].js',
		publicPath: '',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					// configFile: 'tsconfig.client.json',
					configFile: clientPath.resolve(__dirname, '../../ts', 'client/tsconfig.json'),
					// path.resolve(__dirname, "foo", "tsconfig.json")
				},
			},
		],
	},
	target: 'web',
	plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};
