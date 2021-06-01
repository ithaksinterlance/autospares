
const path = require('path');
module.exports = {
  mode: "production",
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
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
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
  }
}