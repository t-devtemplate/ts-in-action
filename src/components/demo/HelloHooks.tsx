

import React, {useEffect, useState} from 'react';
import { Button } from 'antd'

interface Greeting{
  name: string;
  firstName: string;
  lastName: string;
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null);
  // 每次渲染都会执行Effect, 组件的修改生命周期
  useEffect(() => {
    if(count > 5){
      setText('休息一下')
    }
  }, [count]); // 只有count改变的时候，才会执行Effect
  return (
    <>
      <p>你点击了 {count} 次 {text}</p>
      <Button onClick={()=>{setCount(count + 1)}}>Hello {props.name}</Button>
    </>
  )
}

HelloHooks.defaultProps = {
  firstName: "",
  lastName: ""
}

export default HelloHooks;