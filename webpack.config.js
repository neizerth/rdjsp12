const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/template.html',
    }), 
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/i,
                use: [
                MiniCssExtractPlugin.loader, 
                "css-loader"
                ],
            },
        {
            test: /\.scss$/i,
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                "sass-loader"
            ],
        },
    ],
  },
};