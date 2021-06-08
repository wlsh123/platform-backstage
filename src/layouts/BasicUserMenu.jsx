import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import menuList from '../../config/menuConfigs/userMenuConfig';
const { Sider } = Layout;
class BasicUserMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
    };
  }
  UNSAFE_componentWillMount() {
    this.userMenuNode = this.getMenuNodes(menuList);
  }
  getMenuNodes = (menuList) => {
    const { SubMenu } = Menu;
    const path = 1;
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
  render() {
    return (
      <Sider className="sider" width="180">
        <Menu
          mode="inline"
          defaultSelectedKeys={['channelManage']}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          {this.userMenuNode}
        </Menu>
      </Sider>
    );
  }
}

export default BasicUserMenu;
