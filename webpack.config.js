var path = require('path');

module.exports = {

  devtool: 'source-map',

  entry: {
    'app': './demo/app.jsx',
    'synchronizedListsDemo': './demo/SynchronizedLists.jsx'
  },

  // mode: 'development',
  mode: 'production',

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
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  }

};
