const path = require("path");
const glob = require('glob');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');
const cleanWebpack = require('clean-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src')
}


module.exports = merge(config, {
    mode: "production",
    output: {
        filename: 'js/[name]-[contentHash].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    plugins: [
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        }),
    ]
});