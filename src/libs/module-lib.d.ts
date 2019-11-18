
declare function moduleLib(options: Options):void;

// 这个模块声明文件, 所以直接定义在这里是没问题的
interface Options{
  [key:string]: any;
}

declare namespace moduleLib{
  // 在ts官网中, 声明文件中的namespace要向外暴露成员就得加上export
  // 实际测试中, 声明文件中的namespace中的成员都是export, 可以不写
  export let version:string;
  function doSomething():void;
}
/*
js文件是commonjs模块, 所以这里必须export = xx;
不能是export default的原因是因为模块兼容问题。

使用commonJS export = xx;导出, 这样方式的兼容性是最好的。 
因为ES6模块是兼容commonjs模块的。
*/
export = moduleLib;