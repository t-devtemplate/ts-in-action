/// <reference path="a.ts" />


namespace Shape{
  export function square(x: number){
    return x * x;
  }
}

import cricle = Shape.cricle;
console.log(cricle(1));
console.log(Shape.square(1));