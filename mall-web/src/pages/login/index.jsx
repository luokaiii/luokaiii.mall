import React from 'react';
import { WechatOutlined, GithubOutlined } from '@ant-design/icons';
import axios from 'axios';

import './index.less';

export default () => {
  return (
    <div style={{ height: '100%' }}>
      <div className="openid_auth">
        <h1>第三方登录</h1>
        <div>
          <WechatOutlined
            onClick={() => {
              axios.get('/api/oauth2/github/render').then(res => {
                window.open(res.data);
              });
            }}
          />
          <GithubOutlined />
        </div>
      </div>
    </div>
  );
};
