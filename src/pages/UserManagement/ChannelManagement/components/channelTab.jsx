import React, { Component } from 'react';
import { Card, Form, Input, Button, Select, DatePicker, Table } from 'antd';
import { connect } from 'dva';

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: '渠道号',
    dataIndex: 'channelNum',
    key: 'num',
  },
  {
    title: '渠道名称',
    dataIndex: 'channelName',
    key: 'name',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'time',
  },
  {
    title: '创建人',
    dataIndex: 'createMan',
    key: 'man',
  },
  {
    title: '结算模式',
    dataIndex: 'settleModel',
    key: 'model',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'opera',
  },
];
class channelTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <Form layout="inline" colon={false}>
          <Form.Item label="渠道号">
            <Input />
          </Form.Item>
          <Form.Item label="渠道名称">
            <Select>
              <Option value="1">阳光智采</Option>
              <Option value="2">奥德e购</Option>
              <Option value="3">中油e购</Option>
            </Select>
          </Form.Item>
          <Form.Item label="创建日期">
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button>搜索</Button>
          </Form.Item>
        </Form>
        <Button style={{}}>添加渠道</Button>
        <Table dataSource={channelTable} columns={columns} />
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.data);
};

export default connect(mapStateToProps)(channelTab);
