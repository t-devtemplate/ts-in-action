
// 把泛型变量放在类的名称后面, 这样就可以约束所有类的泛型成员了。
class Log<T>{
  // 泛型不能用来约束类的静态成员
  /* static  */run(value:T){
    console.log(value);
    return value;
  }
}


let log1 = new Log<number>();
log1.run(123);
let log2 = new Log();
log2.run({a:1});

// 泛型约束, 泛型继承
interface length{
  length: number
}
function log<T extends length>(value:T):T{
  console.log(value, value.length);
  return value;
}
log([1]);
log('123');
log({length:1});