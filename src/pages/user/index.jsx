import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import BasicHeader from '../../layouts/BasicHeader';
import BasicUserMenu from '../../layouts/BasicUserMenu';

const { Content } = Layout;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Layout>
      <BasicHeader />
      <Layout>
        <BasicUserMenu />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
        </Content>
        </Layout>
      </Layout>
    </Layout>;
  }
}

export default User;