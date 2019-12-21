const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
// const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: {
        // 为入口文件单独提供名称
        'app': './src/index.tsx'
    },
    output: {
        // 修改输出的文件名
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    // loader: 'ts-loader',
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new ForkTsCheckerWebpackPlugin()
        // new CheckerPlugin()
    ],
    // webpack拆包， webpack4提供了新的拆包方式
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
