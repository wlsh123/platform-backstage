import React, { Component } from 'react';
import { Card, Form, Input, Select, DatePicker, Button, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './channelList.less';

const { Option } = Select;
const columns = [
  {
    title: '渠道号',
    dataIndex: 'channelId',
    key: 'channelId',
  },
  {
    title: '渠道名称',
    dataIndex: 'channelName',
    key: 'channelName',
    render: (text) => <a href="">{text}</a>,
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '创建人',
    dataIndex: 'person',
    key: 'person',
  },
  {
    title: '结算模式',
    dataIndex: 'jiesuan',
    key: 'jiesuan',
  },
  {
    title: '操作',
    dataIndex: 'opera',
    key: 'opera',
    render: (text, record) => <a href="">编辑</a>,
  },
];

const data = [
  {
    channelId: '1',
    channelName: '阳光智采',
    time: '2018-06-06 13:21:26',
    person: '高玉晶',
    jiesuan: '集中结算',
  },
  {
    channelId: '2',
    channelName: '奥德e购',
    time: '2018-06-06 13:21:26',
    person: '刘浩',
    jiesuan: '集中结算',
  },
  {
    channelId: '3',
    channelName: '中油e购',
    time: '2018-06-06 13:21:26',
    person: '高然',
    jiesuan: '非集中结算',
  },
];
class ChannelList extends Component {
  render() {
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
            <Table columns={columns} dataSource={data} />
          </div>
        </Card>
      </div>
    );
  }
}

export default ChannelList;
