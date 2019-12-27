import React from 'react';
import { Layout, Menu, LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import Employee from './employee';
// import Setting from './setting';
import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => (
  <LocaleProvider locale={zh_CN}>
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['employee']}
          className="menu"
        >
          <Menu.Item key="employee">员工管理</Menu.Item>
          <Menu.Item key="setting">系统设置</Menu.Item>
        </Menu>
      </Header>
      <Content className="contentWrap">
        <div className="content">
          <Employee />
          {/* <Setting> */}
        </div>
      </Content>
      <Footer className="footer">TypeScript in Action</Footer>
    </Layout>
  </LocaleProvider>
)

export default App;
