const path = require('path');

module.exports = {
  entry: './js/app.js',
  mode: 'development',
  // entry: "./app/app.ts",
  // devtool: 'inline-source-map',
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/,
  //     },
  //   ],
  // },
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js'],
  // },
  // output: {
  //   filename: 'bundle.js',
  // },
  devServer: {
    static: path.join(__dirname, './'),
    port: 8080,
    open: true,
  },
};
