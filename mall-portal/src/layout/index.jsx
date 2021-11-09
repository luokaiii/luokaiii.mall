import React from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Link } from 'umi';

import settings from './layoutSettings';

const menuDataRender = (menuList) =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : [],
    };
  });

export default (props) => {
  const { children } = props;

  return (
    <ProLayout
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routes = []) => [...routes]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      menuDataRender={menuDataRender}
      {...props}
      {...settings}
    >
      {children}
    </ProLayout>
  );
};
