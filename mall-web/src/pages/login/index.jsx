import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import {
  WechatOutlined,
  GithubOutlined,
  QqOutlined,
  AlibabaOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { Route, Link } from 'react-router-dom';
// import WxLogin from './wxLogin';

import Headers from '../components/Headers';
import Footer from '../components/Footer';
import './index.less';

export default () => {
  return (
    <div>
      <Headers />
      <div className="login-page">
        <div className="content">
          <div className="login-page-left"></div>
          <div className="login-page_right">
            <Route
              path={['/login', '/login/form']}
              exact
              component={props => <FormLogin {...props} />}
            />
            <Route
              path="/login/wechat"
              exact
              component={props => <WeChatLogin {...props} />}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const FormLogin = () => {
  return (
    <div>
      <div className="login-page_right_title">账号登录</div>
      <Form>
        <Form.Item name="username">
          <Input className="login-input" placeholder="邮箱/手机号码/账户ID" />
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
        <Link to="/login/wechat">
          <WechatOutlined />
        </Link>
        <GithubOutlined />

        <QqOutlined />
        <AlibabaOutlined />
      </div>
    </div>
  );
};

const WeChatLogin = () => {
  React.useEffect(() => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = false;
    script.src =
      'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js';
    document.head.appendChild(script);

    setTimeout(() => {
      var customeStyle =
        'data:text/css;base64,Lnd4X3FyY29kZSBpZnJhbWUgeyB3aWR0aDogMTYwcHg7IGhlaWdodDogMTYwcHg7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfQ0KLmxvZ2luUGFuZWwgeyBtYXJnaW46MDsgcGFkZGluZzogMDsgfQ0KLmxvZ2luUGFuZWwgLnRpdGxlLCAubG9naW5QYW5lbCAuaW5mbyB7IGRpc3BsYXk6IG5vbmU7IH0NCi5pbXBvd2VyQm94IC5xcmNvZGUgeyBtYXJnaW46IDA7IHdpZHRoOiAxNjBweDsgYm9yZGVyOiBub25lOyB9';
      new WxLogin({
        self_redirect: false,
        id: 'wx_login_container',
        appid: 'wx29250ef2eeb4da78', // 微信开放平台申请的 APPID
        scope: 'snsapi_login',
        redirect_uri: encodeURI(
          'https://kegaixing.com/api/oauth2/wechat_open/callback', // 配置的回调域下的接口
        ),
        state: '' + new Date().getTime(),
        style: 'black',
        href: customeStyle,
      });

      var qrcodeBox = document.getElementById('wx_login_container');
      var iframes = qrcodeBox.getElementsByTagName('iframe');
      if (iframes.length) {
        var ifr = iframes[0];
        ifr.setAttribute('height', '200px');
        ifr.setAttribute(
          'sandbox',
          'allow-scripts allow-top-navigation allow-same-origin',
        );
      }
    }, 1000);
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'left', position: 'relative', top: '-10px' }}>
        <Link to="/login/form">
          <LeftOutlined />
          返回账号登录
        </Link>
      </div>
      <div className="login-page_right_title">微信扫码登录</div>
      <div id="wx_login_container" style={{ padding: '30px 0' }}>
        <img src="data:image/png;base64,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" />
        <p style={{ fontSize: '14px', color: '#00000060', marginTop: '10px' }}>
          二维码为示例静态图
        </p>
        <p style={{ fontSize: '14px', color: '#00000060' }}>
          具体实现请见 wxLogin.js
        </p>
      </div>
    </div>
  );
};
