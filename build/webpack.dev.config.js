
// 开发环境的构建配置
module.exports = {
  // 开启source-map
  // cheap没有列映射。 在调试的时候列信息是没用的。
  // module的含义是可以定位到ts源码, 而不是loader转换后的js源码。
  // eval-source-map含义是会将sourcemap以dataURL的形式打包到文件中。
  // 它的重编译速度是很快的, 所以我们不必担心性能问题。
  devtool: 'cheap-module-eval-source-map'
}