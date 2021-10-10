const path = require('path');

const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');

module.exports = {
  context: src,
  entry: './index.ts',
  output: {
    path: dist,
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
    extensions: ['.ts', '.js', '.tsx']
  }
};
