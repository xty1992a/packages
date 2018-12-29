/*
config from development packages
* */
const path = require('path')
const webpack = require('webpack');
const base = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = p => path.join(__dirname, '..', p)

module.exports = merge(base, {
  entry: {
	app: root('demo/main.js'),
  },
  resolve: {
	extensions: ['.js', '.vue', '.json'],
	alias: {
	  vue: 'vue/dist/vue.js',
	},
  },
  mode: 'development',
  devServer: {
	contentBase: path.join(__dirname, '../'),
	compress: true,
	hot: true,
	port: 8080,
	host: 'localhost',
	publicPath: '/',
	disableHostCheck: true,
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({
	  'PRODUCTION': false,
	}),
	new HtmlWebpackPlugin({
	  filename: 'index.html',
	  template: 'demo/index.html',
	  inject: true,
	  hash: true,
	}),
  ],
})