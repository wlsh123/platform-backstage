import React, { Component } from 'react';
import { Layout, Breadcrumb, Card, Input, Select, TimePicker } from 'antd';
import SearchTab from '@/components/SearchTab/SearchTab';
import BasicHeader from '@/layouts/BasicHeader';
import BasicUserMenu from '@/layouts/BasicUserMenu';

const { Content } = Layout;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Option } = Select;
    return (
      <Layout>
        <BasicHeader />
        <Layout>
          <BasicUserMenu />
          <Layout style={{ padding: '5px 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Card bordered={false} style={{ width: '100%' }}>
              <SearchTab />
            </Card>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default User;
