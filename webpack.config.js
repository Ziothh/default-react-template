const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode: "development", // Stop minifying
    entry: ["./resources/js/index.jsx?", "./resources/scss/index.scss"],
    output: {
        path: path.join(__dirname, "/public"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./resources/index.html",
        }),
    ],
    resolve: {
        modules: [__dirname, "resources", "node_modules"],
        extensions: ["*", ".js", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                // Will compile .scss files into public/css
                test: /\.scss?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "css/[name].css",
                        },
                    },
                    "extract-loader",
                    //"style-loader", // Doesn't work yet
                    "css-loader",
                    "sass-loader",
                ], // Goes from right to left (or bottom to top)
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: ["file-loader"],
            },
        ],
    },
};
