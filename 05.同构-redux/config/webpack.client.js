const {
  resolve
} = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: resolve(__dirname, '../public'),
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
}