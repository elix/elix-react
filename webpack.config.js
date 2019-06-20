var path = require('path');

module.exports = {

  devtool: 'source-map',

  entry: {
    'autoSizeTextareaDemo': './demos/src/AutoSizeTextareaDemo.jsx',
    'calendarDemo': './demos/src/CalendarDemo.jsx',
    'customMenuButtonDemo': './demos/src/CustomMenuButtonDemo.jsx',
    'listAndCarouselDemo': './demos/src/ListAndCarouselDemo.jsx',
    'menuButtonDemo': './demos/src/MenuButtonDemo.jsx'
  },

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
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  }

};
