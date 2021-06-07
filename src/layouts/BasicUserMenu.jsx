import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
class BasicUserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      openKeys: []
     }
  }
  openChange = (e) => {
    this.setState({ openKeys: e})
  }
  clearKeys = () =>{
    this.setState({openKeys:[]})
  }
  render() { 
    const {openKeys} = this.state;
    console.log(openKeys);
    return ( 
      <Sider
        className="sider"
        width="180"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['channelManage']}
          style={{ height: '100%', borderRight: 0 }}
          theme='dark'
          openKeys={openKeys}
          onOpenChange={this.openChange}
          triggerSubMenuAction={this.clearKeys}
        >
          <Menu.Item key="channelManage">渠道管理</Menu.Item>
          <SubMenu key="platformDatabase" title="平台资料库">
            <Menu.Item key="qualificationGroup">资质分组</Menu.Item>
            <Menu.Item key="qualificationManage">资质管理</Menu.Item>
          </SubMenu>
          <SubMenu key="platformCertificationStandards" title="平台认证标准">
            <Menu.Item key="enterpriseRealnameStandard">企业实名标准</Menu.Item>
            <Menu.Item key="brandCertification">品牌认证标准</Menu.Item>
            <Menu.Item key="qualificationReview">资质审核标准</Menu.Item>
            <Menu.Item key="categoryGroupManage">类目组管理</Menu.Item>
          </SubMenu>
          <SubMenu key="enterpriseManage" title="企业管理">
            <Menu.Item key="enterpriseRealnameExamine">企业实名审核</Menu.Item>
            <Menu.Item key="enterpriseIdentify">企业身份认证管理</Menu.Item>
            <Menu.Item key="enterpriseControl">企业管控</Menu.Item>
            <Menu.Item key="enterpriseUpdateExamine">企业资料更新审核</Menu.Item>
          </SubMenu>
          <SubMenu key="personManage" title="个人管理">
            <Menu.Item key="personCertification">个人实名认证</Menu.Item>
          </SubMenu>
          <Menu.Item key="certification">自定义认证模版管理</Menu.Item>
          <Menu.Item key="platformRoleManage">平台角色管理</Menu.Item>
          <Menu.Item key="platformUserManage">平台人员管理</Menu.Item>
          <Menu.Item key="brandExamine">企业品牌审核</Menu.Item>
        </Menu>
      </Sider>
     );
  }
}
 
export default BasicUserMenu;