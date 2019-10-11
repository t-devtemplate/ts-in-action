
abstract class Animal{

  // 定义一个有具体的实现方法, 这样子类就不用实现了, 实现了方法的复用
  eat() {
    console.log('eat');
  }
  // 没有具体实现的抽象方法, 抽象方法的好处就是你明知道子类有其他的实现, 就没必要在父类实现了
  abstract sleep():void
}

// let animal = new Animal()

class Dog extends Animal{
  constructor(name: string){
    super();
    this.name = name;
  }
  name: string;
  run(){}
  sleep(){
    console.log('dog sleep');
  }

}

let dog = new Dog('wangwang');
dog.eat();


class Cat extends Animal{
  sleep(){
    console.log("Cat sleep");
  }
}

let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach((value) => {
  value.sleep(); // 实现多态
})

// 类的成员方法可以直接返回this, 实现链式调用
class WorkFlow{
  step1(){
    return this;
  }
  step2(){
    return this;
  }
}
new WorkFlow().step1().step2();

class MyFlow extends WorkFlow{
  next(){
    return this;
  }
}
new MyFlow().next().step1().next().step2();

export {};