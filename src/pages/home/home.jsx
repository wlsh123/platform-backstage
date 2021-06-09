import React, { Component } from 'react';
import { Layout } from 'antd';
import indexBg from '../../assets/index-bg.png';
import './home.less';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Content } = Layout;
    return (
      <Content className="content">
        <div
          style={{
            padding: '30px',
            fontSize: '30px',
            fontFamily: 'Sans-serif',
          }}
        >
          欢迎使用阳光智采运营管理系统
        </div>
        <div>
          <img src={indexBg} alt="" />
        </div>
      </Content>
    );
  }
}

export default Home;
