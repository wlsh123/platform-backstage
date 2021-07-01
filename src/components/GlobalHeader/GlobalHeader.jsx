import React, { PureComponent } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { Link } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import menuList from '../../../config/menuConfigs/headerMenuConfig';
import storageUtils from '../../utils/storageUtils';
import './GlobalHeader.less';
import logo from '../../assets/logo.png';
const { Header } = Layout;
class GlobalHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    //退出登录
    storageUtils.removeUser();
    window.location.href = '/login';
  };
  // UNSAFE_componentWillMount() {
  //   this.menuNodes = this.getMenuNodes(menuList);
  // }
  // getMenuNodes = (menuList) => {
  //   return menuList.map((item) => {
  //     return (
  //       <Menu.Item key={item.key}>
  //         <Link to={item.key}>{item.title}</Link>
  //       </Menu.Item>
  //     );
  //   });
  // };
  render() {
    const { username } = storageUtils.getUser();
    const { headerKey } = this.props;
    return (
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          className="menu"
          selectedKeys={headerKey}
        >
          <Menu.Item key="user">
            <Link to="/user/channelManagement">用户</Link>
          </Menu.Item>
          <Menu.Item key="menber">
            <Link to="/equitymanage/setplatformequiry">会员</Link>
          </Menu.Item>
          <Menu.Item key="data">
            <Link to="/order">数据</Link>
          </Menu.Item>
          <Menu.Item key="quality">
            <Link to="/qualityBank">质量</Link>
          </Menu.Item>
          <Menu.Item key="factory">
            <Link to="/factory/Inspe/InspectionAudit">验厂</Link>
          </Menu.Item>
          <Menu.Item key="content">
            <Link to="/contentManage">内容</Link>
          </Menu.Item>
          <Menu.Item key="goods">
            <Link to="/materialCenter/CommodityManagement/standardcategory">
              商品
            </Link>
          </Menu.Item>
          <Menu.Item key="charge">
            <Link to="/ServiceCharge/PlatformBasicsRate">结算</Link>
          </Menu.Item>
          <Menu.Item key="purchase">
            <Link to="/purchase">采购</Link>
          </Menu.Item>
          <Menu.Item key="supermarket">
            <Link to="/supermarketAudit">超市</Link>
          </Menu.Item>
          <Menu.Item key="storage">
            <Link to="/minimumReplenishmentSetting">仓储</Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link to="/service">客服</Link>
          </Menu.Item>
          <Menu.Item key="application">
            <Link to="/application">应用</Link>
          </Menu.Item>
          <Menu.Item key="logistics">
            <Link to="/logisticsManagement/logisticsManagements">物流</Link>
          </Menu.Item>
          <Menu.Item key="marketing">
            <Link to="/marketing">营销</Link>
          </Menu.Item>
          <Menu.Item key="setting">
            <Link to="/setting">设置</Link>
          </Menu.Item>
          <Menu.Item key="financial">
            <Link to="/financial/ticketToPay/ticketToPays">金融</Link>
          </Menu.Item>
          <Menu.Item key="sunEsuit">
            <Link to="/sunEsuit/configurationTemplate">e服</Link>
          </Menu.Item>
          <Menu.Item key="invoice">
            <Link to="/invoiceManagement/makeOutInvoice">发票</Link>
          </Menu.Item>
        </Menu>
        <div className="user">
          <Avatar
            size={22}
            icon={<UserOutlined />}
            shape="circle"
            className="avatar"
          />
          <span className="userName">{username}</span>
          <a onClick={this.logout}>退出登录</a>
        </div>
      </Header>
    );
  }
}
export default GlobalHeader;
