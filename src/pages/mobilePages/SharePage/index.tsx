import { Image, Button, NavBar, Swiper } from 'antd-mobile';
import axios from 'axios';
import { useEffect, useState } from 'react';
import logo40 from './images/icon.png';
export default (props) => {
  const [skuInfo, setSkuInfo] = useState();

  useEffect(() => {
    axios
      .post('/sku/like?site=jd&sku_id=100036342265')
      .then((result) => {
        console.log(result);
        setSkuInfo(result.data.data.list[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 轮播图
  const swiperList = skuInfo?.image_list.map((imageUrl, index) => (
    <Swiper.Item key={index}>
      <Image src={imageUrl} />
    </Swiper.Item>
  ));

  return (
    <>
      <div className="download">
        <Image className="small-logo" src={logo40} />
        <span className="description">
          为您提供全网最低价商品，打开多乐买省钱APP
        </span>
        <Button className="download-btn">立即打开</Button>
      </div>
      <NavBar className="bar">商品详情</NavBar>
      <div className="image-list">
        <Swiper>{swiperList}</Swiper>
      </div>
      <div className="sku-name">{skuInfo?.sku_name}</div>
      <div>
        <span>券后</span>
        <span className="sku-min-price">{skuInfo?.min_price}</span>
        <span className="sku-price">{skuInfo?.price}</span>
        <span>约省</span>
        <span className="sku-price">{skuInfo?.price - skuInfo?.min_price}</span>
        <span>元</span>
        <span className="good-comments-rate">
          {skuInfo?.good_comments_rate}
        </span>
        <span>已拼456件</span>
      </div>
    </>
  );
};
