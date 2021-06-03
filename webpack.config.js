const path = require('path');
module.exports = {
  mode: "development",
  entry: 
    ["./src/index.js"],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js','.jsx','.css'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'build'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
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
}
}