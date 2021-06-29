import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import storageUtils from '../../../utils/storageUtils';
import './LoginForm.less';

const LoginForm = () => {
  const onFinish = (values) => {
    storageUtils.saveUser(values);
    window.location.href = '/';
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        className="login-form-userItem"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="请输入用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        className="login-form-passwordItem"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
      <Form.Item className="login-form-aItem">
        <a>忘记密码</a>
        <a>免费注册</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
