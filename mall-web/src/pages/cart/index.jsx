import React from 'react';
import { Checkbox, Button, InputNumber } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import reducer, { ACTIONS, CartContext } from './reducer';
import Headers from '@/pages/components/Headers';
import Footer from '@/pages/components/Footer';
import './index.less';

export default () => {
  const [state, dispatch] = React.useReducer(reducer, {
    goods: [],
  });

  // 初始化数据
  React.useEffect(() => {
    dispatch({
      type: ACTIONS.INIT,
      payload: {
        goods: [
          {
            id: 1,
            cover:
              '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590372984.64595534.jpg?thumb=1&w=80&h=80',
            name: '小米10 Pro 5G 16GB+512GB 玫瑰金',
            price: 1399,
            count: 1,
            checked: true,
          },
          {
            id: 2,
            cover:
              '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1513864376.45999722.jpg?thumb=1&w=80&h=80',
            name: '知吾煮汤锅 米家定制',
            price: 99,
            count: 1,
            checked: true,
          },
        ],
      },
    });
  }, []);

  // 选择单个
  const handleCheckOne = (index, checked) => {
    dispatch({
      type: ACTIONS.CHECK_ONE,
      payload: {
        index,
        checked,
      },
    });
  };

  // 全选
  const handleCheckAll = e => {
    dispatch({
      type: ACTIONS.CHECK_ALL,
      payload: { checked: e.target.checked },
    });
  };

  // 修改数量
  const handleUpdateCount = (index, count) => {
    dispatch({
      type: ACTIONS.UPDATE_GOODS_NUMBER,
      payload: {
        index,
        count,
      },
    });
  };

  // 删除
  const handleRemove = index => {
    dispatch({
      type: ACTIONS.REMOVE_GOODS,
      payload: {
        index,
      },
    });
  };

  const totalPrice = state.goods.reduce((previous, current) => {
    if (current.checked) {
      return previous + (current.price * current.count || 0);
    } else {
      return previous;
    }
  }, 0);

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
                <Checkbox
                  checked={state.goods.filter(v => !!!v.checked).length == 0}
                  onChange={handleCheckAll}
                />{' '}
                全选
              </div>
              <div>商品名称</div>
              <div>单价</div>
              <div>数量</div>
              <div>小计</div>
              <div>操作</div>
            </div>
            {state.goods.map((item, index) => (
              <RenderItem
                goods={item}
                key={item.id}
                handleCheck={e => handleCheckOne(index, e.target.checked)}
                handleUpdate={val => handleUpdateCount(index, val)}
                handleRemove={() => handleRemove(index)}
              />
            ))}
            <div className="cart-main_table_balance">
              <div>
                共<span className="emphasize"> {state.goods.length} </span>
                件商品，已选择
                <span className="emphasize">
                  {` ${state.goods.filter(v => v.checked).length} `}
                </span>
                件
              </div>
              <div className="cart-main_table_balance_right">
                <span className="emphasize">
                  合计
                  <b>{totalPrice}</b>元
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

const RenderItem = ({ goods, handleCheck, handleUpdate, handleRemove }) => {
  return (
    <div className="cart-main_table_item">
      <div className="cart-main_table_radio">
        <Checkbox checked={goods.checked} onChange={handleCheck} />
      </div>
      <div className="cart-main_table_name">
        <img src={goods.cover} alt="" />
        {goods.name}
      </div>
      <div className="cart-main_table_price">{goods.price}元</div>
      <div className="cart-main_table_number">
        <InputNumber
          value={goods.count}
          onChange={handleUpdate}
          min={0}
          max={99}
        />
      </div>
      <div className="cart-main_table_subtotal">
        {goods.price * goods.count}元
      </div>
      <div className="cart-main_table_operate" onClick={handleRemove}>
        <CloseOutlined />
      </div>
    </div>
  );
};
