import React, { Component } from 'react';
import menuList from '../../../../config/menuConfigs/userMenuConfig';
import GlobalLayout from '../../../layouts/Layout';
import ChannelList from './components/ChannelList';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <GlobalLayout
        menuList={menuList}
        headerKey="user"
        siderKey={menuList[0].key}
        breadtitle={menuList[0].title}
        content={<ChannelList />}
      />
    );
  }
}

export default Index;
