import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';

import BasicLayout from './BasicLayout';

const HAS_LAYOUT = ['/', '/home', '/cart', '/me'];

export default props => {
  const {
    location: { pathname },
    children,
  } = props;
  if (HAS_LAYOUT.includes(pathname)) {
    return <BasicLayout {...props} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
