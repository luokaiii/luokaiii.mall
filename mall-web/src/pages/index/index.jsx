import React from 'react';

import Headers from './components/Headers';
import Category from './components/Category';
import SubCategory from './components/Category_sub';
import Main from './components/Main';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import './index.less';

export default () => {
  return (
    <React.Fragment>
      <div className="content">本网站仅做学习使用，所有数据均为测试数据。</div>
      <Headers />
      <Category />
      <SubCategory />
      <Main />
      <Footer />
    </React.Fragment>
  );
};
