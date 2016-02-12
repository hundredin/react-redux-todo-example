var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        loaders: [
            /*
                presets 에 'stage-2' 없을 경우 Spread Operator(...) 사용시 SyntaxError.
                http://stefan.magnuson.co/articles/frontend/using-es7-spread-operator-with-webpack/ 참조
            */
            { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015','stage-2']} },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
