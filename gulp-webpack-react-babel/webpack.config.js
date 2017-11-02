const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: { path: './src/js', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};