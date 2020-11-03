import React from 'react';
import { Carousel } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import { ImgList, CategoryList } from './Category_data';
import './Category.less';
import { history } from 'umi';

export default () => {
  const [subIndex, setSubIndex] = React.useState(0);
  const [subVisible, setSubVisible] = React.useState(false);

  const onMouseEnter = index => {
    setSubIndex(index);
    setSubVisible(true);
  };

  const onMouseLeave = () => {
    setSubVisible(false);
  };

  return (
    <div className="content category-comp" onMouseLeave={onMouseLeave}>
      <div className="category-comp_menu_list">
        <ul>
          {CategoryList.map((item, index) => (
            <li
              key={item.title}
              onMouseEnter={() => onMouseEnter(index)}
              onClick={() => history.push('/cate')}
            >
              <div>{item.title}</div>
              <div>
                <RightOutlined />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="category-comp_sub_list"
        style={{ opacity: subVisible ? 1 : 0 }}
      >
        {CategoryList[subIndex].subClass.map(item => (
          <div key={item.title}>
            <a href="#">{item.title}</a>
          </div>
        ))}
      </div>
      <Carousel autoplay={false}>
        {ImgList.map(url => (
          <div key={url}>
            <img src={url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
