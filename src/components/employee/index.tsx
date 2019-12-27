import React, { Component } from 'react';
import { Table } from 'antd';

import './index.css';

import QueryForm from './QueryForm';

import { employeeColumns } from './colums';
import { render } from 'react-dom';


class Employee extends Component {
  render() {
    return (
      <>
        <QueryForm />
        <Table columns={employeeColumns} className="table" />
      </>
    )
  }
    
}

export default Employee;
