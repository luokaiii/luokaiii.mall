import React from 'react';
import { history } from 'umi';

import './Category_sub.less';

const SubList = [
  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5f20a62c3d5b3d6806bd51ab6c5dd12.jpg?w=632&h=340',
  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a43378b96501d7e227a9018fe2668c5.jpg?w=632&h=340',
  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340',
];

export default () => {
  return (
    <div className="content category_sub_comp">
      <div className="category_sub_content_channel">
        <div className="category_sub_content_channel_grid">
          <div>
            <a>小米秒杀</a>
          </div>
          <div>
            <a>企业团购</a>
          </div>
          <div>
            <a>F码通道</a>
          </div>
          <div>
            <a>米粉卡</a>
          </div>
          <div>
            <a>以旧换新</a>
          </div>
          <div>
            <a>话费充值</a>
          </div>
        </div>
      </div>
      <ul className="category_sub_content">
        {SubList.map(item => (
          <li key={item} onClick={() => history.push('/details/001')}>
            <img src={item} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
