const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HelloWorldPlugin = require('./plugin/test');
module.exports = {
  mode: "development",
  entry: paths.appIndexJs,
  output: {
    filename: "bundle.js",
    path: paths.output,
  },
  resolveLoader: {
    // 去哪些目录下寻找 Loader，有先后顺序之分
    modules: ["node_modules", "./config/"],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "json"],
    alias: {
      src: paths.aliasSrc,
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?|js?|ts?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css|less)$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
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
      template: paths.htmlTemplate,
    }),
    // new HelloWorldPlugin({ options: true }),
  ],
  devServer: {
    compress: true,
    hot: true,
    open: true,
    port: 8000,
  },
};
