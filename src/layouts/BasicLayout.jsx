import React, { Component } from 'react';
import { Layout } from 'antd';
import GlobalHeader from '@/components/GlobalHeader/GlobalHeader';
import BasicSider from './BasicSider';
const { Footer } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <GlobalHeader />
        <Layout>
          <BasicSider menuList={this.props.menuList} />
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
