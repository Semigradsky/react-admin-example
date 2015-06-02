/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var cssnext = require('cssnext');
var cssgrace = require('cssgrace');
var nested = require('postcss-nested');

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: 'source-map',
  entry: './src/scripts/main.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    root: __dirname,
    extensions: ['', '.js'],
    alias: {
      'styles': 'src/styles',
      'images': 'src/images',
      'components': 'src/scripts/components/',
      'mixins': 'src/scripts/mixins',
      'services': 'src/scripts/services',
      'utils': 'src/scripts/utils'
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(ttf|eot|svg)/,
      loader: 'file-loader'
    }, {
      test: /\.woff(2)?/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }]
  },

  postcss: [
    nested,
    cssnext({
      browsers: ['last 1 version', '> 2%']
    }),
    cssgrace
  ]

};
