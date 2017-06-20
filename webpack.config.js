const path = require('path');
const webpack = require('webpack');

module.exports = {

  // ビルドの起点となるファイルパスを設定。
  // このファイルからrequireされているファイルが芋づる式に取得されることになる。
  entry: {
    'index': './src/index.js',
  },

  output: {
    // Webpackに生成したファイルの格納場所を設定
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // HMRに必要な設定①
    // 参照: http://dackdive.hateblo.jp/entry/2016/05/07/183335
    publicPath: '/dist',
  },

  resolve: {
    // この拡張子のファイルをビルド対象に設定
    extensions: ['.js'],

    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },

  module: {
    rules: [
      // 「.js」ファイルをbabel-loaderがハンドルするよう設定
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // 「.vue」ファイルをvue-loaderがハンドルするよう設定
      // 参照: https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          scss: 'vue-style-loader!css-loader!sass-loader'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  devtool: 'source-map',

  // webpack-dev-serverの設定
  devServer: {
    contentBase: '.',
    host: 'localhost',
    port: 5000,
    // HMRに必要な設定②
    hot: true,
  },

  plugins: [
    // HMRに必要な設定③
    new webpack.HotModuleReplacementPlugin(),
  ],

};