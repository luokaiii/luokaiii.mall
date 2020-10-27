import React from 'react';

import Headers from './components/Headers';
import Category from './components/Category';
import SubCategory from './components/Category_sub';
import Main from './components/Main';
import 'antd/dist/antd.css';
import './index.less';

export default () => {
  return (
    <React.Fragment>
      {/* <Headers />
      <Category />
      <SubCategory /> */}
      <Main />
    </React.Fragment>
  );
};
