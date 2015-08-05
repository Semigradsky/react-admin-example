/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';

var webpack = require('webpack');
var cssnext = require('cssnext');
var cssgrace = require('cssgrace');
var nested = require('postcss-nested');
var patch = require('path');

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src/scripts/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    root: patch.join(__dirname, 'src'),
    extensions: ['', '.js'],
    alias: {
      'components': 'scripts/components/',
      'mixins': 'scripts/mixins',
      'services': 'scripts/services',
      'utils': 'scripts/utils',
      'ie': 'component-ie',
      'config.json': 'config.dev.json'
    }
  },

  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint', exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.(ttf|eot|svg)/, loader: 'file' },
      { test: /\.woff(2)?/, loader: 'url?limit=10000&minetype=application/font-woff' }
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
    // cssgrace // Wait fix https://github.com/cssdream/cssgrace/issues/29
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
