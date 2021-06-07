import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { Link } from 'umi';
import indexBg from '../../assets/index-bg.png';
import BasicHeader from '../../layouts/BasicHeader';
import './index.less';
const { SubMenu } = Menu;
const {Content, Sider } = Layout;
export default function Index() {
  return (
    <Layout>
      <BasicHeader />
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
    </Layout>
  );
}
