import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
class BasicUserMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      openKeys: []
     }
  }
  render() { 
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
          <SubMenu key="personManage" title="企业标签管理">
            <Menu.Item key="personCertification">标签列表</Menu.Item>
            <Menu.Item key="personCertification">企业标签设置</Menu.Item>
          </SubMenu>
          <SubMenu key="SapOrgManage" title="新奥sap组织管理">
            <Menu.Item key="purchaseFactory">采购工厂</Menu.Item>
            <Menu.Item key="purchaseOrgList">采购组织列表</Menu.Item>
            <Menu.Item key="purchaseFacList">采购工厂列表</Menu.Item>
            <Menu.Item key="inventoryList">库存地列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="supplierShopScore">供应商店铺评分</Menu.Item>
          <SubMenu key="shopmanage" title="供应商店铺管理">
            <Menu.Item key="businessGrade">供应商评级对比分析</Menu.Item>
          </SubMenu>
          <Menu.Item key="expertAdministration">专家管理</Menu.Item>
          <SubMenu key="indexManage" title="指标管理">
            <Menu.Item key="firstIndexManage">一级指标管理</Menu.Item>
            <Menu.Item key="secondIndexManage">二级指标管理</Menu.Item>
          </SubMenu>
          <SubMenu key="benefitManage" title="权益管理">
            <Menu.Item key="firstbenefitManage">一级权益管理</Menu.Item>
            <Menu.Item key="secondbenefitManage">二级权益管理</Menu.Item>
          </SubMenu>
          <SubMenu key="platformGrade" title="等级规则管理">
            <Menu.Item key="gradeManage">等级管理</Menu.Item>
            <Menu.Item key="dimensionManage">维度管理</Menu.Item>
            <Menu.Item key="categoryScoreRuleManage">类目评分规则管理</Menu.Item>
          </SubMenu>
          <SubMenu key="supplierAdministration" title="供应商管理">
            <Menu.Item key="supplierGrade">供应商评级管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
     );
  }
}
 
export default BasicUserMenu;