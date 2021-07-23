// Path comes with node, don't need to install
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// To use config from this file, add to package.json
module.exports = {
  mode: "development",
  // Per tutorial, devtool: "none" - for old version of webpack
  // devtool: false,

  // Default config for entry and output if no config file had been set up
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    // __dirname takes current directory path for the machine, loaded with every node script
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // Order is important - css-loader first then style-loader
        // BUT the array loads in reverse order :S
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
};
