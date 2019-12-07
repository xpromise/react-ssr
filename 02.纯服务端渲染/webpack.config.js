const {
  resolve
} = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server.js',
  output: {
    path: resolve(__dirname, './build'),
    filename: 'server.js'
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
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}