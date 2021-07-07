import React, { Component } from 'react';
import { Table } from 'antd';
import { test } from '@/services/platformDatabase';
import request from 'umi-request';
class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelList: [],
    };
  }
  UNSAFE_componentWillMount = async () => {
    const result = await test();
    this.setState({ channelList: result.rspBody });
  };
  render() {
    const { channelList } = this.state;
    const columns = [
      {
        title: '渠道号',
        dataIndex: 'channelId',
        key: 'name',
      },
      {
        title: '渠道名称',
        dataIndex: 'channelName',
        key: 'number',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'time',
      },
      {
        title: '创建人',
        dataIndex: 'channelOperAcctName',
        key: 'person',
      },
      {
        title: '结算模式',
        dataIndex: 'clearingSetType',
        key: 'jiesuan',
        render: (text) => {
          if (text == 1) {
            return '集中结算';
          } else {
            return '非集中结算';
          }
        },
      },
      {
        title: '操作',
        dataIndex: 'opera',
        key: 'opera',
        render: (text) => <a>编辑</a>,
      },
    ];
    return <Table columns={columns} dataSource={channelList} />;
  }
}

export default GroupForm;
