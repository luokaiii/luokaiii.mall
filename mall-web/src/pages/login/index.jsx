import React from 'react';
import { Form, message, Input, Button, Divider } from 'antd';
import {
  WechatOutlined,
  GithubOutlined,
  QqOutlined,
  AlibabaOutlined,
} from '@ant-design/icons';
// import WxLogin from './wxLogin';

import Headers from '../components/Headers';
import Footer from '../components/Footer';
import './index.less';

export default () => {
  const getOAuth2Render = type => {
    const obj = require('./wxLogin');
    console.log(obj);
  };

  return (
    <div>
      <Headers />
      <div className="login-page">
        <div className="content">
          <div className="login-page-left"></div>
          <div className="login-page_right">
            <div className="login-page_right_title">账号登录</div>
            <Form>
              <Form.Item name="username">
                <Input
                  className="login-input"
                  placeholder="邮箱/手机号码/账户ID"
                />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password className="login-input" placeholder="密码" />
              </Form.Item>
              <Button className="login-btn" block>
                登录
              </Button>
            </Form>
            <div className="login-page_right_register">
              <a>立即注册</a>
              <Divider type="vertical" />
              <a>忘记密码？</a>
            </div>
            <div className="login-page_right_openid">
              <GithubOutlined />
              <WechatOutlined onClick={getOAuth2Render} />
              <QqOutlined />
              <AlibabaOutlined />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
