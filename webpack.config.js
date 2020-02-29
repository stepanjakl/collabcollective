module.exports = {
    rules: [
        {
            test: /\.(css|sass)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles SASS to CSS
            }]
        }

    ]
}
