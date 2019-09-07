const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',  // 入口文件配置
  output: { // 输出配置
    filename: 'app.js'  // 输出的文件名(默认dist目录)
  },
  resolve: { // 解析
    extensions: ['.js', '.ts', '.tsx'] // 指定扩展名
  },
  // 既然我们引入了新的文件/新的语法扩展->typescript, 那么就需要安装相应loader来解析
  module: {
    rules: [
      {
        test: /\.tsx?$/i, // 使用test属性编写正则 来匹配文件
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/ // 排除文件
      }
    ]
  },
  // 插件配置
  plugins: [
    // 插件作用, 通过一个模块(注意它是模板可以使用模板语法), 帮助我们生成网站的首页, 可以把输出文件自动嵌入到这个文件中。
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    })
  ]
}
