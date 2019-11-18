


declare namespace umdLib{
  const version: string;
  function doSomething():void;
}

// TS专门为umd库设计声明语句。
// 如果我们要编写UMD库的声明语句, 那这条语句是不可缺少的。
export as namespace umdLib;

export = umdLib;