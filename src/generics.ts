
/* function log(value: any): any{
  console.log(value);
  return value;
} */
// 泛型改造
function log<T>(value: T):T{
  console.log(value);
  return value;
}
log<string[]>(['a', 'b']);
log(['a', 'b', 'c']); // 使用TS的类型推断来确定数据类型

// 泛型不仅可以用在函数实现 还可以用在定义函数类型
/* type Log = <T>(value: T) => T;
let myLog:Log = log; */

// 泛型接口
/* interface Log{ // 泛型只约束了接口中的一个函数
  <T>(value:T):T;
} */
// 还可以用函数约束接口中的其它成员
interface Log<T = string>{ // 把泛型变量<T>放到接口名称的后面, 这样接口的所有成员都可以收到泛型变量的约束。
  (value: T):T;
}
// 在泛型变量约束了整个接口之后, 在实现的时候必须指定一个类型
//let myLog: Log<number> = log;
//myLog(1);
// 使用泛型的默认类型
let myLog: Log = log;
myLog('1');


export {};