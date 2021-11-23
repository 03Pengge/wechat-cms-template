const path = require("path");
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
    // new HelloWorldPlugin({ options: true }),
  ],
};
