const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
  mode: "production",
  entry: 
    ["./src/index.js"],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js','.jsx','.css'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
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
}
}