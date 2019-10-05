import { ReadStream } from "tty";


// 函数定义
function add1(x: number, y: number){
  return x + y;
}

// 通过变量定义类型
let add2: (x: number, y:number) => number;

// 通过类型别名来定义函数类型
type add3 = (x: number, y:number)=>number;

// 通过接口定义函数类型
interface add4{
  (x: number, y: number):number;
}

// add1(1, 2, 3);

// 可选参数, 注意: 可选参数必须位于必选参数之后
function add5(x: number, y?:number){ 
  return y ? x + y : x;
}
add5(1,2)

// 默认参数
function add6(x: number, y = 0, z: number, q = 1){
  return x + y + z + q;
}
console.log(add6(1, undefined, 3));

// 剩余参数, 剩余参数的类型是由数组类型存在的
function add7(x:number, ...rest:number[]){
  return x + rest.reduce((pre, cur) => pre+cur);
}
console.log(add7(1,2,3,4,5));

// 函数重载  --   TS的函数重载要求我们先定义一系列名称相同的函数声明
function add8(...rest: number[]):number;
function add8(...rest: string[]):string;
function add8(...rest: any[]): any{
  let first = rest[0];
  if(typeof first === 'string'){
    return rest.join('');
  }else if(typeof first === 'number'){
    return rest.reduce((pre, cur) => pre + cur);
  }else if(typeof first === 'undefined'){
    throw new Error('No param');
  }
}
console.log(add8(1,2,3));
console.log(add8('a', 'b', 'c'));