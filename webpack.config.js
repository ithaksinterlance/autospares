const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path');
module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  mode: "production",
  entry:
    ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
    },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js','.jsx','.css'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|webp)$/i,
      loader: 'file-loader',
    },
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
  ],
},
plugins: [
  new HtmlWebPackPlugin()
]
}