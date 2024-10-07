const path = require('path');

module.exports = {
  entry: "./_build/default/src/output/src/App.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',  // Define a codificação para UTF-8
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
};

