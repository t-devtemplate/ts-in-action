
// 所有配置文件的入口(入口配置文件)
const merge = require('webpack-merge'); // 它的作用是把两个配置文件合并
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.pro.config');

// 根据当前的环境变量来选取配置
let config = process.NODE_ENV === 'development' ? devConfig : proConfig;

module.exports = merge(baseConfig, config);
