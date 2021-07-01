import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'umi';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class GlobalSider extends Component {
  getMenuNodes = (menuList) => {
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
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  };
  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(this.props.menuList);
  }
  render() {
    const { siderKey } = this.props;
    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
          selectedKeys={siderKey}
        >
          {this.menuNodes}
        </Menu>
      </Sider>
    );
  }
}

export default GlobalSider;
