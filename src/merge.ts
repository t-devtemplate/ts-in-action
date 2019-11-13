
interface A{
  x:number
  // y:string;
  foo(bar:number) :number; // 5
  foo(bar: 'c'):number; // 2
}

interface A{
  y: number;
  foo(bar:string):string; // 3
  foo(bar:number[]): number[]; // 4
  foo(bar: 'b'):number; // 1
}

let a:A = {
  x:1,
  y:1,
  foo(bar: any){
    return bar;
  }
}

// a.foo()

function Lib(){}
namespace Lib{
  export let version = '1.0';
}
console.log(Lib.version);

class C {
  static str:string = '1'
}
namespace C{
  export let state = 1;
  export function t(){
  }
}
console.log(C.state);


namespace Color{
  export function mix(){}
}
enum Color{
  Red, Yellow, Bule
}
console.log(Color);

export {};