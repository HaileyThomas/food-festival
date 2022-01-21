const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./assets/ks/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
    }),
  ],
  mode: "development",
};
