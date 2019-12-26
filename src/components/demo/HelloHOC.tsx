
import React, { Component } from "react";

import HelloClass from "./HelloClass";

interface Loading{
  loading: boolean;
}

// 高阶组件
function HelloHOC<P>(WrappedComponent: React.ComponentType<P>){
  return class extends Component<P & Loading>{
    render(){
      const { loading, ...props } = this.props;
      return loading ? <div>Loading...</div> : <WrappedComponent { ...props as P /* 特传属性 */ }></WrappedComponent>
    }
  }
}

export default HelloHOC(HelloClass);