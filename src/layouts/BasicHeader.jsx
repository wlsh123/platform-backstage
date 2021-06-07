import React, { Component } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './BasicHeader.less';
import logo from '../assets/logo.png';
const { Header } = Layout;
class BasicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu theme="dark" mode="horizontal" className="menu">
          <Menu.Item key="user">
            <NavLink to="/user">用户</NavLink>
          </Menu.Item>
          <Menu.Item key="member">会员</Menu.Item>
          <Menu.Item key="data">数据</Menu.Item>
          <Menu.Item key="quality">质量</Menu.Item>
          <Menu.Item key="factory">验厂</Menu.Item>
          <Menu.Item key="content">内容</Menu.Item>
          <Menu.Item key="goods">商品</Menu.Item>
          <Menu.Item key="settlement">结算</Menu.Item>
          <Menu.Item key="purchase">采购</Menu.Item>
          <Menu.Item key="supermarket">超市</Menu.Item>
          <Menu.Item key="storage">仓储</Menu.Item>
          <Menu.Item key="service">客服</Menu.Item>
          <Menu.Item key="apply">应用</Menu.Item>
          <Menu.Item key="logistics">物流</Menu.Item>
          <Menu.Item key="marketing">营销</Menu.Item>
          <Menu.Item key="setting">设置</Menu.Item>
          <Menu.Item key="finance">金融</Menu.Item>
          <Menu.Item key="Eservice">e服</Menu.Item>
          <Menu.Item key="invoice">发票</Menu.Item>
        </Menu>
        <div className="user">
          <Avatar
            size={22}
            icon={<UserOutlined />}
            shape="circle"
            className="avatar"
          />
          <span className="userName">高玉晶</span>
          <span>退出登录</span>
        </div>
      </Header>
    </Layout>
    );
  }
}
export default BasicHeader;