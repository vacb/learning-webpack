// Path comes with node, don't need to install
const path = require("path");

// To use config from this file, add to package.json
module.exports = {
  mode: "development",
  // Per tutorial, devtool: "none" - for old version of webpack
  // devtool: false,

  // Default config for entry and output if no config file had been set up
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    // __dirname takes current directory path for the machine, loaded with every node script
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // Order is important - css-loader first then style-loader
        // BUT the array loads in reverse order :S
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
