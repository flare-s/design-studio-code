const path = require("path");
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src')
  }

module.exports = {
    entry: {
        index:  './src/js/index.js',
        about: './src/js/about.js', 
        services: './src/js/services.js', 
        contact: './src/js/contact.js', 
    },  
    output: {
        filename: 'js/[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "useBuiltIns": "entry",
                                }
                            ]
                        ],
                        
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif|mp4)$/,
                loader:'file-loader',
                options: {
                    name: 'img/[name].[ext]',

                }
                
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
                    
                
           },
            
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     intersectionObserver: 'intersection-observer',
        //     objectFitVideos: 'object-fit-videos',
        //     axios: "axios",
        //     anime: "animejs"
        // }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ['index'],  
        }),
        new HtmlWebPackPlugin({
            template: "./src/about.html",
            filename: "./about.html",
            chunks: ['about'], 
        }),
        new HtmlWebPackPlugin({
            template: "./src/services.html",
            filename: "./services.html",
            chunks: ['services'], 
        }),
        new HtmlWebPackPlugin({
            template: "./src/contact.html",
            filename: "./contact.html",
            chunks: ['contact'],
            

            
            
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        }),

    ],
    devServer: {
        port: 3000,
        disableHostCheck: true,
    }
};



