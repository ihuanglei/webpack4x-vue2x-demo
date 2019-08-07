const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader:
            'babel-loader',
          options: {
            plugins: ['syntax-dynamic-import']
          },
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['*', '.js', '.json', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}