import React from 'react';
import axios from 'axios';
import { message } from 'antd';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';

import './index.less';

export default () => {
  const getOAuth2Render = type => {
    axios.get(`/api/oauth2/${type}/render`).then(res => {
      if (res.data) {
        window.open(res.data);
      }
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      <div className="logo-view">
        <img src={require('@/static/logo.png')} />
      </div>
      <div className="openid_auth">
        <h1>第三方登录</h1>
        <div>
          <WechatOutlined
            onClick={() => message.error('暂未开放，请使用 Github 登录')}
          />
          <GithubOutlined onClick={() => getOAuth2Render('github')} />
        </div>
      </div>
    </div>
  );
};
