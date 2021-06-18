const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname,"./public")
  },
  entry:
    path.resolve(__dirname,"./src/index.js"),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js','.jsx','.css'],
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: [/node_modules/],
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
  ],
},
plugins: [
  new HtmlWebPackPlugin({
    template: 'public/index.html',
    favicon: 'public/favicon.ico'
  })
],
}