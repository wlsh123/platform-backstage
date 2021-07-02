import React, { Component } from 'react';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalSider from '../components/GlobalSider/GlobalSider';
import GlobalBreadcrumb from '../components/Breadcrumb/GlobalBreadcrumb';
const { Content } = Layout;

class GlobalLayout extends Component {
  render() {
    const { menuList, headerKey, siderKey, breadtitle, content } = this.props;
    return (
      <Layout>
        <GlobalHeader headerKey={headerKey} />
        <Layout>
          <GlobalSider menuList={menuList} siderKey={siderKey} />
          <Layout style={{ padding: '0 24px 24px' }}>
            <GlobalBreadcrumb breadtitle={breadtitle} />
            <Content
            //   className="site-layout-background"
            //   style={{
            //     padding: 24,
            //     margin: 0,
            //     minHeight: 280,
            //   }}
            >
              {content}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default GlobalLayout;
