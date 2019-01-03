// Imports: Dependencies
const path = require('path');
// require("babel-register");
// Webpack Configuration
const config = {
  // Entry
  entry: './src/index.js',
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  mode: "development",
  // Loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'less-loader']
      },
    ]
  },
  // Plugins
  plugins: [],
  devtool: "source-map",
};
// Exports
module.exports = config;