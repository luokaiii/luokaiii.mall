import React from 'react';
import { Checkbox, Button, Input, InputNumber } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import Headers from '@/pages/components/Headers';
import Footer from '@/pages/components/Footer';
import './index.less';

export default () => {
  return (
    <React.Fragment>
      <Headers />
      <main className="cart-page">
        <header className="cart-header">
          <div className="content">
            <h1>我的购物车</h1>
            <h6>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</h6>
          </div>
        </header>
        <div className="content cart-main">
          <div className="cart-main_table">
            <div className="cart-main_table_item">
              <div>
                <Checkbox /> 全选
              </div>
              <div>商品名称</div>
              <div>单价</div>
              <div>数量</div>
              <div>小计</div>
              <div>操作</div>
            </div>
            <div className="cart-main_table_item">
              <div className="cart-main_table_radio">
                <Checkbox />
              </div>
              <div className="cart-main_table_name">
                <img
                  src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590372984.64595534.jpg?thumb=1&w=80&h=80"
                  alt=""
                />
                小米10 Pro 5G 16GB+512GB 玫瑰金
              </div>
              <div className="cart-main_table_price">1399元</div>
              <div className="cart-main_table_number">
                <InputNumber defaultValue="1" />
              </div>
              <div className="cart-main_table_subtotal">1399元</div>
              <div className="cart-main_table_operate">
                <CloseOutlined />
              </div>
            </div>
            <div className="cart-main_table_balance">
              <div>
                共 <span className="emphasize">2</span> 件商品，已选择{' '}
                <span className="emphasize">2</span> 件
              </div>
              <div className="cart-main_table_balance_right">
                <span className="emphasize">
                  合计<b>1399</b>元
                </span>
                <Button className="button">结算</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};
