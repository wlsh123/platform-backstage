import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import GlobalHeader from '@/components/GlobalHeader/GlobalHeader';
import ChannelTab from './components/channelTab';
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
class ChannelManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <GlobalHeader />
        <Layout>
          <Sider width={200} theme="dark">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">渠道管理</Menu.Item>
              <SubMenu key="2" title="平台资料库">
                <Menu.Item key="2-1">资质分组</Menu.Item>
                <Menu.Item key="2-2">资质管理</Menu.Item>
              </SubMenu>
              <SubMenu key="3" title="平台认证标准">
                <Menu.Item key="3-1">企业实名标准</Menu.Item>
                <Menu.Item key="3-2">品牌认证标准</Menu.Item>
                <Menu.Item key="3-3">资质审核标准</Menu.Item>
                <Menu.Item key="3-4">类目组管理</Menu.Item>
              </SubMenu>
              <SubMenu key="4" title="企业管理">
                <Menu.Item key="4-1">企业实名审核</Menu.Item>
                <Menu.Item key="4-2">企业身份认证管理</Menu.Item>
                <Menu.Item key="4-3">企业管控</Menu.Item>
                <Menu.Item key="4-4">企业资料更新审核</Menu.Item>
              </SubMenu>
              <SubMenu key="5" title="个人管理">
                <Menu.Item key="5-1">个人实名认证</Menu.Item>
              </SubMenu>
              <Menu.Item key="6">自定义认证模板管理</Menu.Item>
              <Menu.Item key="7">平台角色管理</Menu.Item>
              <Menu.Item key="8">平台人员管理</Menu.Item>
              <Menu.Item key="9">企业品牌审核</Menu.Item>
              <SubMenu key="10" title="企业标签设置">
                <Menu.Item key="10-1">企业标签设置</Menu.Item>
              </SubMenu>
              <SubMenu key="11" title="新奥sap组织管理">
                <Menu.Item key="11-1">采购公司</Menu.Item>
                <Menu.Item key="11-2">采购组织列表</Menu.Item>
                <Menu.Item key="11-3">采购工厂列表</Menu.Item>
                <Menu.Item key="11-4">库存地列表</Menu.Item>
              </SubMenu>
              <Menu.Item key="12">供应商店铺评分</Menu.Item>
              <SubMenu key="13" title="供应商店铺管理">
                <Menu.Item key="13-1">商家评级对比分析</Menu.Item>
              </SubMenu>
              <Menu.Item key="14">专家管理</Menu.Item>
              <SubMenu key="15" title="指标管理">
                <Menu.Item key="15-1">一级指标管理</Menu.Item>
                <Menu.Item key="15-2">二级指标管理</Menu.Item>
              </SubMenu>
              <SubMenu key="16" title="权益管理">
                <Menu.Item key="16-1">一级权益管理</Menu.Item>
                <Menu.Item key="16-2">二级权益管理</Menu.Item>
              </SubMenu>
              <SubMenu key="17" title="等级规则管理">
                <Menu.Item key="17-1">等级管理</Menu.Item>
                <Menu.Item key="17-2">维度管理</Menu.Item>
                <Menu.Item key="17-3">类目评分规则管理</Menu.Item>
              </SubMenu>
              <SubMenu key="18" title="供应商管理">
                <Menu.Item key="18-1">供应商评级管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>渠道管理</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <ChannelTab />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default ChannelManagement;
