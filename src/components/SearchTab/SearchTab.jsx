import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import { Form, Input, Button, Select, DatePicker } from 'antd';
class SearchTab extends Component {
  render() {
    const { RangePicker } = DatePicker;
    return (
      <>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          colon={false}
          labelCol={{ span: 3, offset: 0 }}
          size="10"
        >
          <Form.Item label="渠道号">
            <Input />
          </Form.Item>
          <Form.Item label="渠道名称">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="创建日期">
            <RangePicker locale={locale} />
          </Form.Item>
          <Form.Item>
            <Button>搜索</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default SearchTab;
