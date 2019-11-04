// exports === module.exports
// exports 引用了module.exports
// 不能用exports来整体导出, 整体导出只能用module.exports
// 用了module.exports整体导出后, 用exports就无效了。
module.exports = {};

// 导出多个变量
exports.c = 3;
exports.d = 4;
