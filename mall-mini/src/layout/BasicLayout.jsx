import React from 'react';
import { NavBar, TabBar } from 'antd-mobile';
import { history } from 'umi';

const TabBarData = [
  {
    id: 'home',
    name: '首页',
    icon: require('../assets/recycleH5_07.png'),
    selectedicon: require('../assets/recycleH5_02.png'),
    url: '/home',
  },
  {
    id: 'class',
    name: '购物车',
    icon: require('../assets/recycleH5_03.png'),
    selectedicon: require('../assets/recycleH5_06.png'),
    url: '/cart',
  },
  {
    id: 'my',
    name: '我的',
    icon: require('../assets/recycleH5_04.png'),
    selectedicon: require('../assets/recycleH5_05.png'),
    url: '/me',
  },
];

export default props => {
  const { location, children } = props;
  const { pathname } = location;

  const isTabBarSelect = url => {
    return pathname === url;
  };

  return (
    <div style={{height: '100%'}}>
      <TabBar
        unselectedTintColor="#333"
        tintColor="#ef5f55"
        barTintColor="white"
        tabBarPosition="bottom"
      >
        {TabBarData.map(t => {
          const isSelect = isTabBarSelect(t.url);
          return (
            <TabBar.Item
              title={t.name}
              key={t.id}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${t.icon}) center center / 21px 21px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${t.selectedicon}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              onPress={() => {
                history.push(t.url);
              }}
              selected={isSelect}
              data-seed="logId"
            >
              {isSelect && children}
            </TabBar.Item>
          );
        })}
      </TabBar>
    </div>
  );
};
