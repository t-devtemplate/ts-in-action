
// 定义从后端取到的数据结构
interface List{
  readonly id:number; // 只读属性 -- 一般来说Id是不允许修改的
  name:string;
  // 字符串索引签名 -- 签名之后表示该类型可索引的
  // [x:string]: any; // 定义索引key为string类型, 索引值为any类型
  age?: number; // 可选属性

}

interface Result{
  data: List[];
}

function render(result:Result){
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if(value.age){
      console.log(value.age);
    }
  })
}

// 假设后端返回的数据
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B', age: 10}
  ]
}
// render(result);

// 如果直接转入对象字面量的话, ts会对额外的字段进行检查
/* render({
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
}) */
// 解决方法1
// render(result);  // 把对象字面量赋值给一个变量, 然后转入。
// 解决方法2
/* render({
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
} as Result); */ // 类型断言
// 解决方法3
// 接口定义成可索引的
/* render({
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
}); */
render(result);


interface StringArray {
  [index:number]:string;
}
let chars:StringArray = ['A', 'B', 'C'];

interface Names{
  [x:string]:any;
  [y:number]:number;
}
let names:Names;

