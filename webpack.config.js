var path = require('path');

module.exports = {

  entry: './demo/app.jsx',

  mode: 'development',

  module: {
    rules: [
      {
        exclude: /node_modules/,
				test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  }

};
