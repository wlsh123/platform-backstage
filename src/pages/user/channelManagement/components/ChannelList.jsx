import React, { Component } from 'react';
import { Card, Form, Input, Select, DatePicker, Button, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { connect } from 'dva';
import './channelList.less';

const { Option } = Select;
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
      const config = {
        1: '集中结算',
        2: '非集中结算',
        3: '混合结算',
      };
      if (config[text]) {
        return config[text];
      }
    },
  },
  {
    title: '操作',
    dataIndex: 'opera',
    key: 'opera',
    render: (text) => <a onClick={() => history.push('/edit')}>编辑</a>,
  },
];
class ChannelList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'channelTable/getChannelList',
      payload: {},
    });
  }
  render() {
    const { channelList } = this.props.channelTable;
    return (
      <div>
        <Card>
          <div>
            <Form
              colon="false"
              layout="inline"
              labelCol={{ span: 20 }}
              // wrapperCol={{ offset: 10 }}
            >
              <Form.Item label="渠道号">
                <Input />
              </Form.Item>
              <Form.Item label="渠道名称">
                <Select style={{ width: '200px' }}>
                  <Option>阳光智采</Option>
                  <Option>奥德e购</Option>
                  <Option>中油e购</Option>
                </Select>
              </Form.Item>
              <Form.Item label="创建日期">
                <DatePicker.RangePicker style={{ width: '80%' }} />
              </Form.Item>
              <Form.Item>
                <Button icon={<SearchOutlined />}>搜索</Button>
                <a href="" style={{ marginLeft: '10px' }}>
                  重置
                </a>
              </Form.Item>
            </Form>
          </div>
          <div className="add-button">
            <Button type="primary">添加渠道</Button>
          </div>
          <div>
            <Table columns={columns} dataSource={channelList} />
          </div>
        </Card>
      </div>
    );
  }
}
const mapstateToProps = ({ channelTable }) => {
  return { channelTable };
};
export default connect(mapstateToProps)(ChannelList);
