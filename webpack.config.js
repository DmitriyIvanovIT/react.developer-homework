const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');

module.exports = {
  context: src,
  entry: './index.tsx',
  devtool: 'source-map',
  output: {
    path: dist,
    filename: 'index.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@': src
    },
    extensions: ['.ts', '.js', '.tsx']
  },
  plugins: [
    new HTMLWebpackPlugin(
      {
        template: src + '/public/index.html'
      }
    )
  ]
};
