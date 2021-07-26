// Path comes with node, don't need to install
const path = require("path");

// To use config from this file, add to package.json
module.exports = {
  // Default config for entry and output if no config file had been set up
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // Not needed in Webpack 5?
      // {
      //   test: /\.(svg|png|jpg|gif)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[hash].[ext]",
      //       outputPath: "imgs",
      //     },
      //   },
      // },
    ],
  },
};
