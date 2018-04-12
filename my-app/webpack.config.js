const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index"],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: false,
    contentBase:path.join(__dirname,"build"),
    port:5000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, "src")],
        use: ["babel-loader?cacheDirectory=true"]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|cur)$/,
        use: ["file-loader?name=images/[hash].[ext]"]
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  }
};
