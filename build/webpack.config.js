const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

// Wrong !
// let config = process.env.NODE_ENV === 'development' ? devConfig : proConfig
// module.exports = merge(baseConfig, config);

/*
背景: 在npm脚本中, 分别给webpack-server和webpack命令传入了一个mode参数。 
错误方式:
    获取参数的方法不能通过node的环境变量来获取。
正确方式:
    在webpack入口文件(入口配置文件)中, 通过导出函数的第二个参数来获取, 第二个参数有个mode属性, 通过这个属性来判断当前环境是什么。
 */

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};
