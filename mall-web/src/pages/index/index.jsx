import React from 'react';

import Headers from './components/Headers';
import Category from './components/Category';
import 'antd/dist/antd.css';
import './index.less';

export default () => {
  return (
    <React.Fragment>
      <Headers />
      <Category />
    </React.Fragment>
  );
};
