import { Breadcrumb } from 'antd';
import React, { Component } from 'react';
class GlobalBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { breadtitle } = this.props;
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{breadtitle}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default GlobalBreadcrumb;
