
interface DogInterface{
  run(): void;
}
interface CatInterface{
  jump(): void;
}
// 交叉类型
let pet: DogInterface & CatInterface = {
  run(){},
  jump(){}
}
// 联合类型
let a:number | string = 'a';
// 字面量类型, 有的时候我们不仅需要限定一个变量的类型, 而且还要限定变量的取值在某个特定的范围内
let b: 'a' | 'b' | 'c' = 'a';
let c: 1 | 2 | 3;

class Dog implements DogInterface{
  run() {}
  eat() {}
}
class Cat implements CatInterface{
  jump(){}
  eat(){}
}
enum Master { Bay, Girl }
function getPet(master:Master){
  let pet = master === Master.Bay ? new Dog : new Cat;
  // 如果一个变量的类型是联合类型, 在类型还未确定的情况下, 那他只能访问所有类型的共同成员。
  pet.eat();
  return pet;
}

interface Square{
  kind: 'square';
  size: number;
}
interface Rectangle{
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle{
  kind: 'circle',
  r: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape)/* : number */{
  switch(s.kind){
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.r * s.r;
    default: 
      // 在default中检查未被之前case捕捉到的类型是否为never类型
      // 如果s是never类型, 说明前面的分支都覆盖了, 这个分支永远不会走到
      // 如果s不是never类型, 说明前面的分支又遗落, 需要补上这个分支
      return ((e:never) => {
        throw new Error(e)
      })(s)
  }
}

console.log(area({kind: 'circle', r: 1}));


export {};