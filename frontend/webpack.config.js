const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    devServer: {
        port: 3000,
        contentBase: './public'
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [ new ExtractTextPlugin('app.css') ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [ 'babel-preset-env', { modules: false } ],
                            'babel-preset-react'
                        ],
                        plugins: [ 'transform-object-rest-spread' ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}