const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports= {
    entry:{
        main: './src/index.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].js',
        publicPath: '/'
    },
    resolve:{
        extensions:['.js' , '.jsx']
    },
    devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                },
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {

                test: /\.(s*)css$/,
                use: [ 
                    {

                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
             {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'assets/[hash].[ext]',
                    },
                  },
                ],
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        })
    ],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        historyApiFallback: true,
        compress: true,
        port: 8080,
    }
}