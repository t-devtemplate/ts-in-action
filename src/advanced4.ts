let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: '4'
}
function getValues<T, K extends keyof T>(obj: T, keys: K[]):T[K][]{
  return keys.map(key => obj[key]);
}
console.log(getValues(obj, ['a', 'b', 'c']));
// console.log(getValues(obj, ['e', 'f'])); // 使用TS来对约束这种情况



interface Obj{
  a: number,
  b: number
}
// keyof T 表示类型T的所有公共属性的字面量的联合类型。
let key: keyof Obj

// T[K[, K1...]] 表示对象T的属性K所代表的类型
let value: Obj['a' | 'b'];

// T extends U 表示泛型变量可以通过继承某个类型, 获得某些属性


export {};