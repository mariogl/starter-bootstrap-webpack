const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dirs = {
    dev: "src",
    prod: "public"
}

const config = {
    entry: path.resolve(__dirname, dirs.dev, "js", "index.js"),
    output: {
        path: path.resolve(__dirname, dirs.prod)
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ]
                        }
                    }
                },
                {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    resolve: {
        extensions: [".scss", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, dirs.dev, "index.html"),
            filename: "index.html"
        })
    ]
};

module.exports = { config, dirs }