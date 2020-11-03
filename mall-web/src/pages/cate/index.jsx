import React from 'react';
import { DownCircleOutlined } from '@ant-design/icons';
import { history, Link } from 'umi';

import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { Categories } from './data';
import './index.less';

const RenderSection = ({ item }) => {
  return (
    <section className="cate-content-module">
      <h1>
        <DownCircleOutlined />
        {item.h1 || '无标题'}
      </h1>
      <section className="cate-content-module_list">
        {item.list &&
          item.list.map((i, index) => (
            <div
              key={index}
              className="cate-content-module_item"
              onClick={() => history.push('/details/001')}
            >
              <div>
                <img src={i.cover} />
              </div>
              <div>{i.title}</div>
            </div>
          ))}
      </section>
    </section>
  );
};

export default () => {
  return (
    <main>
      <Headers />
      <div className="cate-page">
        <header className="cate-header">
          <div className="content">
            <Link to="/">首页</Link>
            <span> / </span>
            <span>全部商品分类</span>
          </div>
        </header>
        <section className="content cate-content">
          {Categories.map((item, iIndex) => (
            <RenderSection key={iIndex} item={item} />
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
};
