const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "production",
  entry: 
    ["@babel/polyfill","./src/index.js"],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js','.jsx','.css','.mjs'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ["@babel/preset-env","@babel/preset-react"] 
      },
    },
    {
      test: /\.css$/i,
      use: [
        "file-loader", 
      ],
    },
    {
      test: /\.(png|jpe?g|gif|webp)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'images',
      },
    },
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
    {
      test: /\.xml$/,
      use: {
        loader: 'xml-loader',
        options: {
          explicitArray: false,
        },
      },
    },
  ],
  plugins: [new HtmlWebpackPlugin()],
  }
}