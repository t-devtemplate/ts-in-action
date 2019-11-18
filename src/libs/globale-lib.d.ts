
declare function globalLib(options: globalLib.Options):void;

declare namespace globalLib{
  let version:string;
  function doSomething():void;
  // 因为这是全局模块的声明文件, 
  // 故要把这接口的声明隐藏起来, 不对全局环境暴露避免产生污染。
  interface Options{
    [key:string]:number;
  }
}
