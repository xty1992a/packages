/*
	config for build umd module to use
* */
const webpack = require('webpack');
const base = require('./webpack.base.conf');
const merge = require('webpack-merge');

module.exports = merge(base, {
  entry: {},
})