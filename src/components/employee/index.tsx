import React, { Component } from 'react';
import { Table } from 'antd';

import './index.css';


import { connect } from 'react-redux';

import QueryForm from './QueryForm';

import { employeeColumns } from './colums';

import { EmployeeResponse, EmployeeRequest } from "../../interface/employee";
import { getEmployee } from '../../redux/employee'
import { bindActionCreators, Dispatch } from 'redux';


interface Props{
  onGetEmployee(param: EmployeeRequest): void;
  employeeList: EmployeeResponse;
}

class Employee extends Component<Props> {
  render() {
    const { employeeList, onGetEmployee } = this.props;
    return (
      <>
        <QueryForm getData={onGetEmployee} />
        <Table columns={employeeColumns} dataSource={employeeList} className="table" />
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList
})

const mapDispatchToPros = (dispatch: Dispatch) => bindActionCreators({
  onGetEmployee: getEmployee
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Employee);
