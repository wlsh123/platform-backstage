import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
const { Sider } = Layout;
const { SubMenu } = Menu;
class BasicSider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UNSAFE_componentWillMount() {
    const { menuList } = this.props;
    this.SiderMenus = this.getSiderMenus(menuList);
  }
  getSiderMenus = (menuList) => {
    if (menuList) {
      return menuList.map((item) => {
        if (!item.children) {
          return (
            <Menu.Item key={item.key}>
              <Link to={item.key}>{item.title}</Link>
            </Menu.Item>
          );
        } else {
          return (
            <SubMenu key={item.key} title={item.title}>
              {this.getSiderMenus(item.children)}
            </SubMenu>
          );
        }
      });
    }
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <Sider className="sider" width="180">
        <Menu
          mode="inline"
          defaultSelectedKeys={['channelManage']}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          {this.SiderMenus}
        </Menu>
      </Sider>
    );
  }
}

export default BasicSider;
