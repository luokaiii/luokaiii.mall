import React from 'react';
import produce from 'immer';

export const ACTIONS = {
  /**
   * 初始化数据
   */
  INIT: 'INIT',
  /**
   * 添加商品
   */
  ADD_GOODS: 'ADD_GOODS',
  /**
   * 修改商品数量
   */
  UPDATE_GOODS_NUMBER: 'UPDATE_GOODS_NUMBER',
  /**
   * 移除商品
   */
  REMOVE_GOODS: 'REMOVE_GOODS',
  /**
   * 全选
   */
  CHECK_ALL: 'CHECK_ALL',
};

export const CartContext = React.createContext(null);

export default (state, { type, payload }) => {
  var result = state;
  switch (type) {
    case ACTIONS.INIT:
      return localStorage.getItem('cart') || {};
    case ACTIONS.ADD_GOODS:
      result = produce(state, draftState => {
        if (!Array.isArray(draftState.goods)) {
          draftState.goods = [payload];
        } else {
          draftState.goods.push(payload);
        }
      });
      break;
    case ACTIONS.REMOVE_GOODS:
      result = produce(state, draftState => {
        draftState.goods.splice(payload.index, 1);
      });
      break;
    case ACTIONS.UPDATE_GOODS_NUMBER:
      result = produce(state, draftState => {
        draftState.goods[payload.index].count = payload.count;
      });
      break;
    case ACTIONS.CHECK_ALL:
      result = produce(state, draftState => {
        draftState.goods.forEach(good => {
          good.checked = true;
        });
      });
      break;
    default:
      return state;
  }
  // 每次操作完后，需要保存到storage中，再返回
  localStorage.setItem('cart', result);
  return result;
};
