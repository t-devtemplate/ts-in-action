// 原始类型
let bool:boolean = true
let num:number|undefined|null = 123
let str:string = 'abc'
// str = 123;

// 数组
let arr1:number[] = [1,2,3];
let arr2:Array<number | string> = [1,2,3, '4']; // number | string表示联合类型

// 元组(是一种特殊的数组, 限定了元素类型和个数)
let tuple:[number, string] = [0, '1'];
// tuple.push('123'); // 可以push是设计的一个缺陷。
// console.log(tuple);
// tuple[3]; 依然不能使用

// 函数       参数类型            返回值类型(可以省略, 这就利用了ts的类型推断功能)
// let add = (x: number, y: number):number => x + y;
let add = (x: number, y: number) => x + y;
// 定义函数类型
let compute:(x:number, y:number) => number; 
// 实现函数。在实现的过程中参数名称可不一样, 且参数类型可以省略。
compute = (a, b) => a + b;

// 对象   可以看看Object的定义
let obj:Object = {x:1, y:2};
// obj.x = 3; 报错obj上没有x属性, obj只是简单的指定了类型是Object, 并没有具体定义它应该包含那些属性。
// 正确的做法
let obj1:{x:number, y:number} = {x:1,y:2};
obj1.x = 3;

// symbol,   symbol的含义是具有唯一的值(symbol值是唯一的)。
let s1:symbol = Symbol();
let s2 = Symbol()
console.log(s1 === s2);

// undefined, null
let un:undefined = undefined;
let nu:null = null;
num = undefined;
num = null;

// void 函数无返回值
// 在js中void是一个操作符, 可以将任何表达式返回undefined值。
// 为什么有这种语法呢? undefined在js中不是保留字, 我们甚至可以自定义一个undefined的变量去覆盖全局的undefined。
let noReturn = () => {};

// any  任意类型。 非特殊情况不建议使用, 如果滥用那就没必要使用ts了。
// 这个类型的出现其实就是为了兼容js
let x;
x = 1;
x = '1';
x = [];

// never 表示永远不会有返回值的类型。
let error = () => {
  // 抛出了异常, 这个函数永远不会有返回值。
  throw new Error('error')
}
let endless = () => {
  while(true){}
}