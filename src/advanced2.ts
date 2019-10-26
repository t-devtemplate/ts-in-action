
enum Type{
  Strong, Week
}

class Java{
  helloJava(){
    console.log("Hello Java");
  }
  java:any;
}

class JavaScript{
  helloJavaScript(){
    console.log('Hello JavaScript');
  }
  javascript:any;
}

// 创建类型保护函数, 来确定对象的类型
function isJava(lang:Java|JavaScript): lang is Java{/* lang is Java 类型谓词 */
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type:Type, x: string|number){
  // 因为不知道程序在运行的时候会传入什么参数
  // 所以在使用联合类型变量的时候, 每个使用的地方都要加上类型断言
  let lang = type === Type.Strong ? new Java : new JavaScript;
 /*  if((lang as Java).helloJava){
    (lang as Java).helloJava();
  }else{
    (lang as JavaScript).helloJavaScript();
  } */
  // instanceof  可以判断实例属于某个类
  /* if(lang instanceof Java){
    lang.helloJava();
  }else{
    lang.helloJavaScript();
  } */
  // in 可以判断一个属性属于某个对象
  /* if('java' in lang){
    lang.helloJava();
  }else{
    lang.helloJavaScript();
  } */
  // typeof 可以判断一个基本类型
  /* if(typeof x === 'string'){
    x.toString();
  }else{
    x.toFixed();
  } */
  if(isJava(lang)){
    lang.helloJava();
  }else{
    lang.helloJavaScript();
  }
  return lang;
}

getLanguage(Type.Strong, 1);
export {};