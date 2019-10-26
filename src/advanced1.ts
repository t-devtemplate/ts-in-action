import { AnyTxtRecord } from "dns";

/*
  X 兼容 Y
    X(目标类型) = Y(源类型)
*/
let s: string = 'a';
s = null;  // null是string的子类型, 可以说string兼容null类型的。

// 兼容兼容性
interface X{
  a: any;
  b: any;
}
interface Y{
  a: any;
  b: any;
  c: any;
}
// 接口之间的兼容性, 成员少的兼容成员多的
let x:X = { a: 1, b: 2}
let y:Y = { a: 1, b: 2, c: 3}
x = y;
// y = x;

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler){
  return handler;
}
// 1). 参数个数
// 目标函数参数的个数必须大于源函数参数的个数
// 参数多的函数兼容参数少的函数
let handler1 = (a:number) => {};
hof(handler1);
let handler2 = (a:number, b:number, c:number) => {};
// hof(handler2);

// 可选参数和剩余参数
let a = (p1:number, p2:number) => {}
let b = (p1?:number, p2?:number) => {}
let c = (...args:number[]) => {}
a = b;
a = c;
b = c;
b = a;
c = a;
c = b;

// 2) 参数类型必须匹配
let handler3 = (a:string) => {};
// hof(handler3);

// 函数参数是对象的情况
// 配置strictFunctionTypes
/* 函数参数的双向协变
    允许我们把一个精确的类型, 赋值给不那么精确的类型。这样很方便, 不需要把一个不精确的类型断言成为一个精确的类型。 */
interface Point3D{
  x: number;
  y: number;
  z: number;
}
interface Point2D{
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
// 函数的参数是对象
// 可以想象把对象的成员一个个的变成函数的参数, 同基本参数规则一样, 多值参数的兼容少的
p3d = p2d;
p2d = p3d;

// 3) 返回值类型
let f = () => ({name: 'Alice'});
let g = () => ({name: 'Alice', location: 'Beijing'});
f = g;
// g = f;

function overload(a:number, b:number):number;
function overload(a:string, b:string):string;
function overload(a:Object, b:Object, c:Object):Object;
// 函数重载的实现, 调用必须要覆盖到函数定义
function overload(a:any, b:any, c?:any):any{};

// 枚举类型
// 枚举类型和数值类型是完全兼容的
enum Fruit{ Apple, Banana };
enum Color{ Red, Yellow };
let fruit:Fruit.Apple = 123;
let no:number = Fruit.Apple;
//  枚举和枚举之间是完全不兼容的
// let color:Color.Red = Fruit.Apple;

// 类兼容性
class A{
  constructor(p:number, q:number){}
  id:number = 1;
  private name:string = '';
}
class B{
  static s = 1;
  constructor(p:number){}
  id: number = 2;
  private name:string = '';
}
// 在比较两个类是否兼容的时候, 静态成员和构造函数是不参与比较的
// 如果两个类具有相同的实例成员, 那么他们实例就可以相互兼容
// 除了父子类之外, 如果两个类具有私有成员, 他们之间是不兼容的,
let aa = new A(1, 2);
let bb = new B(1);
/* aa = bb;
bb = aa; */
class C extends A{}
let cc = new C(1, 2);
aa = cc;
cc = aa;

// 泛型兼容性
interface Empty<T>{
  value:T
}
// 如果泛型接口的泛型变量被成员使用, 泛型不一致那么他们之间是不兼容的
/* let obj1:Empty<number> = {};
let obj2:Empty<string> = {};
obj1 = obj2; */

let log1 = <T>(x:T):T => {
  console.log('x');
  return x;
}
let log2 = <U>(y:U):U => {
  console.log('y');
  return y;
}
// 如果两个泛型函数定义相同, 并且没有定义泛型参数, 那么他们之间是兼容的
log1 = log2;

export {};