const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build')
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: '/',
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
