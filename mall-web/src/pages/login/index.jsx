import React from 'react';
import { Link } from 'umi';
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
        <Link to="/">
          <img src={require('@/static/logo.png')} alt="logo" />
        </Link>
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
