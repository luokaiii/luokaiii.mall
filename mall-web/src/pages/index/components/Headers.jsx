import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import './Headers.less';

export default () => {
  return (
    <header>
      <div className="content header-comp">
        <div className="header-comp_left">

        </div>
        <div className="header-comp_center">
          <a>小米手机</a>
          <a>Redmi 红米</a>
          <a>电视</a>
          <a>笔记本</a>
          <a>家电</a>
          <a>路由器</a>
          <a>智能服务</a>
          <a>社区</a>
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
