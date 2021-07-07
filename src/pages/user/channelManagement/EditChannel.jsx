import React, { Component } from 'react';
import menuList from '../../../../config/menuConfigs/userMenuConfig';
import GlobalLayout from '../../../layouts/Layout';
import ChannelEdit from './components/ChannelEdit';
class EditChannel extends Component {
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
        content={<ChannelEdit />}
      />
    );
  }
}

export default EditChannel;
