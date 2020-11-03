import React from 'react';
import { Link } from 'umi';

import Headers from '../components/Headers';
import Category from './components/Category';
import SubCategory from './components/Category_sub';
import Main from './components/Main';
import Footer from '../components/Footer';

import 'antd/dist/antd.css';
import './index.less';

export default () => {
  return (
    <React.Fragment>
      <Headers />
      <Category />
      <SubCategory />
      <Main />
      <Footer />
    </React.Fragment>
  );
};
