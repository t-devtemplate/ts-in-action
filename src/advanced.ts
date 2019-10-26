

let a = 1;  
let b = [1, null];

let c = (x = 1) => x + 1;

window.onkeydown = function(ev:KeyboardEvent){
  // ev
}

interface Foo{
  bar:number
}
//let foo = {} as Foo;
// foo.bar = 1;
// 类型断言可以增加我们代码的灵活性, 在改造一些旧代码的时候, 会非常有效。
// 避免类型断言不能滥用, 应该尽可能的给变量添加类型约束, 而不是通过类型断言去推断变量的类型。
// 对上下文环境有充足的预判才去使用类型断言, 没有任何依据的类型断言会给代码带来安全的隐患。
let foo:Foo = {
  bar: 1
};


export {};