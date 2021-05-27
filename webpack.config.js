const path = require('path');

module.exports = {
  entry: {
    app : ["./src/index.js"],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js','.jsx','.css']
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
        presets: ['@babel/preset-env']        
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
  ],
  }
}