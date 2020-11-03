import React from 'react';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import Headers from '../components/Headers';
import Footer from '../components/Footer';
import LeftSection from './components/LeftSection';
import Header from './components/Header';
import './index.less';

export default () => {
  return (
    <div>
      <Headers />
      <main className="details-page">
        <Header />
        <section className="content details-main">
          <LeftSection />
          <section className="details-main_right">
            <h1 className="details_text_1">小米10至尊纪念版</h1>
            <div className="details_text_2">
              <span className="ff6700">
                「碎屏保、延保5折；+1元得200G云空间月卡；最高享24期免息；可使用北京消费券；购机得双倍米金」
              </span>
              <span>
                120X 超远变焦 / 120W 秒充科技 / 120Hz刷新率 + 240Hz采样率 /
                骁龙865旗舰处理器 / 双模5G / 10倍混合光学变焦 /
                OIS光学防抖+EIS数字防抖 / 2000万超清前置相机 /
                双串蝶式石墨烯基锂离子电池 / 等效4500mAh大电量 / 120W
                有线秒充+50W无线秒充+10W无线反充 / WiFi 6 / 多功能NFC / 红外遥控
              </span>
            </div>
            <div className="details_text_3">小米自营</div>
            <div className="details_text_4">5599 元</div>
            <p className="details_text_title">选择颜色：</p>
            <div className="details_option_list">
              <blockquote className="details_option_item">陶瓷黑</blockquote>
              <blockquote className="details_option_item">透明版</blockquote>
              <blockquote className="details_option_item">亮银版</blockquote>
            </div>
            <p className="details_text_title">选择版本：</p>
            <div className="details_option_list">
              <blockquote className="details_option_item">8GB+256GB</blockquote>
              <blockquote className="details_option_item">8GB+128GB</blockquote>
              <blockquote className="details_option_item">
                12GB+256GB
              </blockquote>
              <blockquote className="details_option_item">
                16GB+512GB
              </blockquote>
            </div>
            <p className="details_text_title">
              <span>意外保护：</span>
              <span>了解意外保护 ></span>
            </p>
            <div className="details_option_list">
              <blockquote className="details_option_item">
                意外保障服务
              </blockquote>
              <blockquote className="details_option_item">
                碎屏保障服务
              </blockquote>
            </div>
            <p className="details_text_title">
              <span>延长保修：</span>
              <span>了解延长保修 ></span>
            </p>
            <div className="details_option_list">
              <blockquote className="details_option_item">
                延长保修服务
              </blockquote>
            </div>
            <div className="details_choose_content">
              <div className="details_choose_item">
                <span>小米10至尊纪念版 8GB+256GB 陶瓷黑</span>
                <span>5599 元</span>
              </div>
              <div className="details_choose_item">
                <span>碎屏保障服务</span>
                <span>88 元</span>
              </div>
              <div className="details_choose_price">总计 5600元</div>
            </div>
            <div className="details_btn_list">
              <Button className="details_join_btn">加入购物车</Button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};
