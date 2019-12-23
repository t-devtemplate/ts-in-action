
import React from 'react';
import { Button } from 'antd'

interface Greeting{
  name: string;
  firstName: string;
  lastName: string;
}

const Hello = (props: Greeting) => {
 return <Button> Hello {props.name} </Button>
}
// React.FC类型是React函数组件是缩写
/* const Hello:React.FC<Greeting> = ({
  name, firstName, lastName, children
}) => {
  return <Button> Hello {name}</Button>
} */
Hello.defaultProps = {
  firstName: "",
  lastName: ""
}

export default Hello;