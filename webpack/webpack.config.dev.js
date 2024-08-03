const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

const publicPath = process.env.BASENAME || '/';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: publicPath,
  },
  devServer: {
    static: {
      directory: Path.resolve(__dirname, '../build'),
    },
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    open: true,
    client: {
      overlay: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // new ESLintPlugin({
    //   files: Path.resolve(__dirname, '../src'),
    //   emitWarning: true
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});