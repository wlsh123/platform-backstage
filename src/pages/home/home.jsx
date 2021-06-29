import { Layout } from 'antd';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import './index.less';
import indexBg from '../../assets/index-bg.png';

const { Content } = Layout;
export default function Index() {
  return (
    <Layout className="layout">
      <GlobalHeader />
      <Content className="content">
        <div>欢迎使用阳光智采运营管理系统</div>
        <img src={indexBg} alt="" />
      </Content>
    </Layout>
  );
}
