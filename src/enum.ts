
// 数字枚举 
enum Role {
  Reporter = 1, // 指定值之后, 后面的成员会相应的递增。
  Developer,
  Maintainer,
  Owner,
  Guest
}
// 成员值默认取值从0开始。
console.log(Role.Reporter);
console.log(Role.Developer);
// 枚举在运行环境下被编译成了对象。
// 数字枚举还会生成反向映射。 值也被做成了Key, 映射回key。
console.log(Role); 

// 字符串枚举
enum Message {
  Success = '恭喜你, 成功了',
  Fail = '抱歉, 失败了'
}
console.log(Message.Success);
console.log(Message);

// 异构枚举(字符串和数字混用)
enum Answer{
  N,
  Y = 'Yes'
}
console.log(Answer);

// 枚举成员
// Role.Reporter = 3;  // 枚举成员是不能被修改的。
enum Char{
  // const  常量枚举成员, 在编译的时候就会计算出来
  a,
  b = Char.a, // 对已有成员的引用
  c = 1 + 3, 
  // computed 需要被计算的枚举成员。值被保留了, 在运行阶段才被计算
  d = Math.random(),
  e = '123'.length,
  // 在computed成员后面的成员一定要赋予初始值, 因为没法自增值。
  f = 4
}

// 常量枚举
// 使用const声明的枚举就是常量枚举
// 常量枚举有个特性就是在编译阶段被会移除, 编译后是没有这个代码的。
/*
常量枚举的作用是: 
  当我们不需要一个对象, 而需要对象值的时候就可以使用常量枚举, 这样可以减少在运行环境中的代码。
*/
const enum Month{
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar];
console.log(month);

// 枚举类型, 在某些情况下枚举和枚举成员都可以做为一种“单独的类型”存在。
enum E { a, b}
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana'}

// 数值枚举   数字枚举类型与number类型相互兼容, 可以相互赋值。
let e:E = 3; // 可以“把任意数值赋值给枚举或枚举成员类型变量”
let f:F = 3; // 可以越出枚举类型约定的值
// e === f; // 不同枚举类型不能比较

let e1:E.a = 1;
let e2:E.b;
// e1 === e2; 不能枚举成员, 不能比较
let e3:E.a = 1;
e1 === e3;

let f1:F.a = 3;

// 字符串枚举, 取值只能是枚举成员的值。
let g1:G = G.a;
let g2:G.a = G.a;
