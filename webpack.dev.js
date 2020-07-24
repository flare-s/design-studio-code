const path = require("path");
const config = require("./webpack.config");
const {merge} = require('webpack-merge');

module.exports = merge(config, {
    mode: "development",
    output: {
        filename: 'js/[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    devServer: {
        port: 3000,
        disableHostCheck: true,
    }
});