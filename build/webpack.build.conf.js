/*
	config for build umd module to use
* */
const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.base.conf');
const merge = require('webpack-merge');
const root = p => path.join(__dirname, '..', p);

module.exports = merge(base, {
	mode: 'production',
	entry: root('src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'package.js',
		publicPath: '/',
		library: 'PACKAGE',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue',
		},
	},
	performance: false,
	optimization: {
		minimize: true,
	},
});
