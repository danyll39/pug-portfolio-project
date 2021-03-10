const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './client.jsx',
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'javascript/bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),

    new CopyPlugin({
      patterns: [
      { from: path.resolve(__dirname, 'public', 'index.html'), to: path.resolve(__dirname, 'dist', 'index.html') }
      ]
    })
  ]
}
