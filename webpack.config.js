const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'app'),
        use: ['babel-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '主页',
      template: path.resolve(__dirname, 'app/index.html')
    }),
    new CleanWebpackPlugin(['build'])
  ]
}
