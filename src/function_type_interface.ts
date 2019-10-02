

// 用变量来定义一个函数类型
// let add: (x: number, y:number) => number;

// 用接口来定义一个函数类型
// interface Add{
//   (x: number, y:number):number;
// }

// 类型别名,  为这个类型起一个别名
type Add = (x: number, y: number) => number
let add:Add = (x, y) => x + y;

// 混合类型接口。   既可以定义一个函数也可以像对象一样定义属性和方法。
interface Lib{
  (): void;
  version: string;
  doSomething(): void;
}

// 构造器
function getLib(){
  let lib:Lib = (() => { console.log(123)  }) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {};
  return lib;
}
let lib1 = getLib();
lib1();
let lib2 = getLib();
lib2();
console.log(lib1 === lib2);


export {}; 