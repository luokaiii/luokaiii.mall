import React, { useState } from 'react';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import { Link } from 'umi';

import './index.less';

const menuDataRender = menuList =>
  menuList.map(item => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : [],
    };
  });

export default props => {
  const { children } = props;
  const [settings, setSettings] = useState({ fixSiderbar: true });

  return (
    <div id="mall-pro-layout" style={{ height: '100vh' }}>
      <ProLayout
        {...props}
        title="微の商城-后台"
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
        rightContentRender={() => (
          <div style={{ marginRight: '24px' }}>欢迎光临，大猪蹄子！</div>
        )}
        menuDataRender={menuDataRender}
        {...settings}
      >
        {children}
      </ProLayout>
      <SettingDrawer
        getContainer={() => document.getElementById('mall-pro-layout')}
        settings={settings}
        onSettingChange={val => setSettings(val)}
        disableUrlParams
      />
    </div>
  );
};
