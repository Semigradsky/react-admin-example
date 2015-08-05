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
var patch = require('path');

module.exports = {

  output: {
    publicPath: '/react-admin-example/assets/',
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
    root: patch.join(__dirname, 'src'),
    extensions: ['', '.js'],
    alias: {
      'components': 'scripts/components/',
      'mixins': 'scripts/mixins',
      'services': 'scripts/services',
      'utils': 'scripts/utils',
      'config.json': 'config.json'
    }
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.(ttf|eot|svg)/, loader: 'file-loader' },
      { test: /\.woff(2)?/, loader: 'url-loader?limit=10000&minetype=application/font-woff' }
    ]
  },

  postcss: [
    nested,
    cssnext({
      browsers: ['last 1 version', '> 2%'],
      import: {
        root: 'styles'
      }
    })
    // cssgrace
  ]

};
