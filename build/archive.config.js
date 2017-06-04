const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const resolve = (file) => path.resolve(__dirname, file)
const isProd = process.env.NODE_ENV === 'production'
const release = process.env.RELEASE
const rimraf = require('rimraf')
const copyTo = `releases/${release}/`

rimraf(resolve(`../releases/${release}`), function (err) {
  err && console.log(err)
})

module.exports = {
  entry: resolve('../assets/archive.js'),
  output: {
    path: resolve(`../releases/${release}/public`),
    publicPath: `/releases/${release}/public/`,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'assets': resolve('../assets'),
      'components': resolve('../components'),
      'examples': resolve('../examples'),
      'layouts': resolve('../layouts'),
      'pages': resolve('../pages'),
      'public': resolve('../public'),
      'router': resolve('../router'),
      'static': resolve('../static'),
      'store': resolve('../store'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    noParse: [
      /es6-promise\.js$/,
      /releases/
    ], // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: ['style', 'css', 'stylus']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new ExtractTextPlugin({
      filename: 'build.css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.RELEASE': release,
      'process.env.VUE_ENV': '"client"'
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'assets/archive.template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([
      {
        from: 'static',
        to: '../static',
        ignore: ['.*']
      },
      {
        from: 'examples',
        to: '../examples',
        ignore: ['.*']
      },
      {
        from: 'pages',
        to: '../pages',
        ignore: ['.*']
      }
    ])
  ]
}