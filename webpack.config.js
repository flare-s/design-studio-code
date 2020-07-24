const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: {
        index:  './src/js/index.js',
        about: './src/js/about.js', 
        services: './src/js/services.js', 
        contact: './src/js/contact.js', 
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
                                    useBuiltIns: "entry",
                                    corejs: '3.6.5',
                                    targets: {
                                        "browsers": ["last 4 versions", "ie >= 11"]
                                    }
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
                    name: 'img/[name]-[hash].[ext]',

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
                          config: {
                            path: 'postcss.config.js'
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

    ],
};



