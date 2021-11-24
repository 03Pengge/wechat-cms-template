const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HelloWorldPlugin = require('./plugin/test');

module.exports = {
  mode: "development",
  entry: "./src/entry/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "../dist"),
  },
  resolveLoader:{
    // 去哪些目录下寻找 Loader，有先后顺序之分
    modules: ['node_modules','./config/'],
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: ['style-loader', 'css-loader','less-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.yaml$/i,
      //   // use: ['yamlLoader'],
      //   use: [
      //     {
      //       loader: 'yamlLoader',
      //       options: {
      //         type: '13223'
      //       },
      //     },
      //   ]
      // },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    // new HelloWorldPlugin({ options: true }),
  ],
  devServer: {
    compress: true,
    hot: true,
    open: true,
    port: 9000
  }
};
