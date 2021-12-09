const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Old
module.exports = {
    entry: "./src/app.jsx?",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "app.min.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
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
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: ["file-loader"],
            },
        ],
    },
};

// module.exports = {
//     entry: "./src/app.jsx",
//     output: {
//         filename: "bundle.[hash].js",
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/index.html",
//         }),
//     ],
//     resolve: {
//         module: [__dirname, "src", "node_modules"],
//         extensions: ["*", ".js", ".tsx", ".ts"],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loader: require.resolve("babel-loader"),
//             },
//             // {
//             //     test: /\.css?$/,
//             //     use: ["style-loader", "css-loader"],
//             //     // exclude: /node_modules/,
//             //     // loader: require.resolve("babel-loader")
//             // },
//         ],
//     },
// };
