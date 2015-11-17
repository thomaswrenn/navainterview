var webpack = require('webpack');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
    devtool: 'eval-source-map',
    context: __dirname + "/",
    entry: {
        'main': './public/js/main.jsx'
    },
    output: {
        path: './public/js/',
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new WebpackErrorNotificationPlugin(),
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': '"production"' }
        })
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx?harmony'], exclude: /\/node_modules\// },
            { test: /\.jsx$/, loaders: ['jsx?harmony'], exclude: /\/node_modules\// }
        ]
    }
};
