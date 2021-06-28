import React, { Component } from 'react';
import './login.less';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img
            src="https://static.ygyg.cn/static/brand/sso-web/yunadmin/logo.png"
            alt="logo"
          />
          <div className="login-header-line"></div>
          <div>登录</div>
        </header>
        <section className="login-section">
          <img
            src="https://static.ygyg.cn/static/brand/sso-web/yunadmin/bg.png"
            alt=""
          />
          Form
        </section>
        <div className="login-footer">底部</div>
      </div>
    );
  }
}

export default Login;
