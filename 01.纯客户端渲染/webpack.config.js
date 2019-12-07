const {
  resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, './build'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-react"
        ],
        plugins: ["@babel/plugin-proposal-class-properties"]
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000,
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    open: true
  }
}