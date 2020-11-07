import React from 'react';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, history } from 'umi';

import './Headers.less';

export default () => {
  return (
    <header>
      {/* 顶部提示，登录，购物车 */}
      <div className="header-bar">
        <div className="content header-bar_content">
          <div>
            本网站仅做学习使用，所有数据均为测试数据。除商品数据固定外，所有交互数据均保存于storage中。
          </div>
          <div>
            <Link to="/login">登录</Link>
            <Link to="/cart">
              <ShoppingCartOutlined />
              购物车
            </Link>
          </div>
        </div>
      </div>
      {/* 内容 */}
      <div className="content header-comp">
        <div className="header-comp_left" onClick={() => history.push('/')}>
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
      {/* 悬浮区域 */}
      <div className="header-float">
        <div className="content">
          <div className="header-float_item">
            <div>
              <img
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png"
                alt=""
              />
            </div>
            <div className="header-float_item_title">小米10 至尊纪念版</div>
            <div className="header-float_item_price">5699 起</div>
          </div>
          <div className="header-float_item">
            <div>
              <img
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png"
                alt=""
              />
            </div>
            <div className="header-float_item_title">小米10 至尊纪念版</div>
            <div className="header-float_item_price">5699 起</div>
          </div><div className="header-float_item">
            <div>
              <img
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png"
                alt=""
              />
            </div>
            <div className="header-float_item_title">小米10 至尊纪念版</div>
            <div className="header-float_item_price">5699 起</div>
          </div><div className="header-float_item">
            <div>
              <img
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png"
                alt=""
              />
            </div>
            <div className="header-float_item_title">小米10 至尊纪念版</div>
            <div className="header-float_item_price">5699 起</div>
          </div>
        </div>
      </div>
    </header>
  );
};
