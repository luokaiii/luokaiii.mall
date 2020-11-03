import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import './Headers.less';
import { Link } from 'umi';

export default () => {
  return (
    <header>
      <div
        style={{
          lineHeight: '40px',
          background: '#f2f2f2',
        }}
      >
        <div
          className="content"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            lineHeight: '40px',
            background: '#f2f2f2',
            padding: '0 20px',
          }}
        >
          <div>本网站仅做学习使用，所有数据均为测试数据。</div>
          <Link to="/login">登录</Link>
        </div>
      </div>
      <div className="content header-comp">
        <div className="header-comp_left">
          <img src={require('@/static/logo.png')} />
        </div>
        <div className="header-comp_center">
          <Link to="/cate">全部分类</Link>
          <a>手机</a>
          <a>老人机</a>
          <a>电视</a>
          <a>笔记本</a>
          <a>家电</a>
          <a>路由器</a>
          <a>智能穿戴</a>
        </div>
        <div className="header-comp_right">
          <input placeholder="小米10至尊纪念版" />
          <button>
            <SearchOutlined />
          </button>
        </div>
      </div>
    </header>
  );
};
