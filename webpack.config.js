var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path')

module.exports = {
    context: path.resolve(__dirname + '/client'),
    devtool:debug ? "inline-sourcemap" : null,
    entry: './src/js/app.js',
    module: {
        loaders:[
            {
                test: /\.js?$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname + '/client/src'),
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ]
}
