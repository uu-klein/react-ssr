/*
 * @Author: Klien
 * @Date: 2022-02-08 05:03:48
 * @LastEditTime: 2022-02-08 09:20:11
 * @LastEditors: Klien
 */
const spawn = require('cross-spawn');
const basePath = require('path');
const webpack = require('webpack');
const webpackConfigClient = require('../client/webpack.config.client');
const webpackConfigServer = require('../server/webpack.config.server');

const compiler = webpack([
	{
		...webpackConfigClient,
		mode: 'development',
		output: {
			...webpackConfigClient.output,
			filename: '[name].js',
		},
	},
	{
		...webpackConfigServer,
		mode: 'development',
	},
]);

let node: any;

compiler.hooks.watchRun.tap('Dev', (compiler: any) => {
	console.log(`Compiling ${compiler.name} ...`);
	if (compiler.name === 'server' && node) {
		node.kill();
		node = undefined;
	}
});

compiler.watch({}, (err: any, stats: any) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(stats?.toString('minimal'));
	const compiledSuccessfully: any = !stats?.hasErrors();
	if (compiledSuccessfully && !node) {
		console.log('Starting Node.js ...');
		node = spawn('node', ['--inspect', basePath.join(__dirname, '../../../dist/server.js')], {
			stdio: 'inherit',
		});
	}
});
