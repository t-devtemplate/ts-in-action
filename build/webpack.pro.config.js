const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    // 它的作用是每次成功构建前帮助我们清空dist目录
    // 有的时候为了避免缓存我们需要在文件后加入hash, 这样在多次构建后dist目录就会产生很多无用的文件。
    new CleanWebpackPlugin() 
  ]
}