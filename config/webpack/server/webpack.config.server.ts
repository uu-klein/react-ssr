/*
 * @Author: Klien
 * @Date: 2022-02-05 13:28:07
 * @LastEditTime: 2022-02-08 09:43:43
 * @LastEditors: Klien
 */
const nodeExternals = require("webpack-node-externals");
const serverPath = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  name: "server",
  entry: {
    server: serverPath.resolve(__dirname, "../../../app", "server/index.ts"),
  },
  mode: "production",
  output: {
    path: serverPath.resolve(__dirname, "../../../dist"),
    filename: "[name].js",
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          // configFile: "tsconfig.server.json",
          configFile: serverPath.resolve(__dirname, "../../ts", "server/tsconfig.json"),
        },
      },
    ],
  },
  target: "node",
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: "app/server", from: "views", to: "views" }],
    }),
  ],
};
