import React, { Component } from 'react';
import { Table } from 'antd';

import './index.css';

import QueryForm from './QueryForm';

import { employeeColumns } from './colums';

import { EmployeeResponse } from "../../interface/employee";

interface State{
  employee: EmployeeResponse
}

class Employee extends Component<{}, State> {
  state: State = {
    employee: undefined
  }
  setEmployee = (employee:EmployeeResponse)=>{
    this.setState({
      employee
    })
  }
  getTotal = ()=>{
    let total:number;
    // 为空的边界处理，这样也是使用TS的好处。
    if(typeof this.state.employee !== 'undefined'){
      total = this.state.employee.length;
    }else{
      total = 0;
    }
    return <p>共有 {total} 名员工</p>
  }
  render() {
    return (
      <>
        <QueryForm onDataChange={this.setEmployee} />
        {this.getTotal()}
        <Table columns={employeeColumns} dataSource={this.state.employee} className="table" />
      </>
    )
  }
    
}

export default Employee;
