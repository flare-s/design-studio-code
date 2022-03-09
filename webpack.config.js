const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const path = require("path");
const glob = require('glob');

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
        filename: 'js/[name]-[contentHash].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
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
                                    useBuiltIns: "usage",
                                    corejs: '3',
                                }
                            ]
                        ],
                        
                    }
                }
            },
            // {
            //     test: /\.(png|svg|jpg|gif|mp4)$/,
            //     loader:'file-loader',
            //     options: {
            //         name: 'img/[name]-[hash].[ext]',

            //     }
                
            // },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset',
                generator: {
                    filename: './img/[hash][ext][query]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
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
                        loader: 'postcss-loader',
                        options: {
                          sourceMap: true,
                          postcssOptions: {
                            config: 'postcss.config.js',
                          }
                        }
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
                    
                
           },
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ['index'],  
        }),
        new HtmlWebPackPlugin({
            template: "./src/pages/about.html",
            filename: "./pages/about.html",
            chunks: ['about'], 
            publicPath: '../'
        }),
        new HtmlWebPackPlugin({
            template: "./src/pages/services.html",
            filename: "./pages/services.html",
            chunks: ['services'], 
            publicPath: '../'
        }),
        new HtmlWebPackPlugin({
            template: "./src/pages/contact.html",
            filename: "./pages/contact.html",
            chunks: ['contact'],
            publicPath: '../'
            

            
            
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        })

    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,
    }
};



