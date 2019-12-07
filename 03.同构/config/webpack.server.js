const {
  resolve
} = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    path: resolve(__dirname, '../build'),
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: [nodeExternals()]
}