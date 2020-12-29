import React from 'react';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, history } from 'umi';

import './Headers.less';

const cates = [
  '手机',
  '老人机',
  '电视',
  '笔记本',
  '家电',
  '路由器',
  '智能穿戴',
];

export default () => {
  const [mousePos, setMousePos] = React.useState({ link: false, block: false });

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
          {cates.map(item => (
            <a
              className="header-comp_center_link"
              key={item}
              onMouseEnter={() =>
                setMousePos({ link: true, block: mousePos.block })
              }
              onMouseOut={() =>
                setMousePos({ link: false, block: false })
              }
            >
              {item}
            </a>
          ))}
        </div>
        <div className="header-comp_right">
          <input placeholder="小米10至尊纪念版" />
          <button>
            <SearchOutlined />
          </button>
        </div>
      </div>
      {/* 悬浮区域 */}
      <div
        onMouseEnter={() => setMousePos({ link: mousePos.link, block: true })}
        onMouseLeave={() => setMousePos({ link: false, block: false })}
        className="header-float"
        style={{ display: mousePos.link || mousePos.block ? 'block' : 'none' }}
      >
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
          </div>
        </div>
      </div>
    </header>
  );
};
