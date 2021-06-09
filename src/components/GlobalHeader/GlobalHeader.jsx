import React, { PureComponent } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { Link } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import menuList from '../../../config/menuConfigs/headerMenuConfig';
import './GlobalHeader.less';
import logo from '../../assets/logo.png';
const { Header } = Layout;
class GlobalHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }
  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      );
    });
  };
  render() {
    return (
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu theme="dark" mode="horizontal" className="menu">
          {this.menuNodes}
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
    );
  }
}
export default GlobalHeader;
