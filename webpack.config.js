/* eslint-disable */
// @ts-nocheck
const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/index.ts',
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SimpleUi',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
  },
};
