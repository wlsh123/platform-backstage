import React, { Component } from 'react';
import {
  Layout,
  Breadcrumb,
  Card,
  Input,
  Select,
  Form,
  DatePicker,
  Button,
} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import menuList from '../../../../config/menuConfigs/userMenuConfig';
import BasicLayout from '@/layouts/BasicLayout';
class ChannelManagement extends Component {
  render() {
    return <BasicLayout menuList={menuList}>这是content</BasicLayout>;
  }
}

export default ChannelManagement;
