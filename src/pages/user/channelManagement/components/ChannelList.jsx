import React, { Component } from 'react';
import { Card, Form, Input, Select } from 'antd';
import './channelList.less';

const { Option } = Select;
class ChannelList extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: 300 }}>
          <div>
            <Form colon="false">
              <Form.Item label="渠道号">
                <Input />
              </Form.Item>
              <Form.Item label="渠道名称">
                <Select>
                  <Option>阳光智采</Option>
                  <Option>奥德e购</Option>
                  <Option>中油e购</Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default ChannelList;
