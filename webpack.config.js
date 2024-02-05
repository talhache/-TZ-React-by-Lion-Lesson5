const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
		],
	},
	devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
		},

		compress: true,
		port: 3010, // default 8000
	},
};
