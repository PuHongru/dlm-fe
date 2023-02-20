import './index.less';
import { Image } from 'antd-mobile';
import logo from '@/assets/images/logo.png';
import nameImg from '@/assets/images/nameImg.png';
import qrcodeImg from '@/assets/images/home_web_erweima@2x.png';

export default (props) => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-header">
          <Image className="logo" src={logo} />
          <Image className="name" src={nameImg} />
          <span className="home-btn">首页</span>
        </div>
        <div className="content">
          <div className="description">
            <span>尽收全网折扣商品</span>
            <br />
            <span>多乐买为您省到底</span>
          </div>
          <div className="download">
            <Image className="qr-code" src={qrcodeImg} />
            <a className="ios download-btn">
              <i className="iconfont icon-dlmios" />
              IOS下载
            </a>
            <a
              className="android download-btn"
              href="https://dlm.heyunshuju.com/download/dlm-app-release.apk"
              target="_blank"
            >
              <i className="iconfont icon-dlmandroid" />
              安卓下载
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <span>Copyright © 2023 QUD, Inc. All Rights Reserved. | </span>
        <a
          className="copyright"
          href="https://beian.miit.gov.cn/"
          target="_blank"
        >
          京ICP备2023002815号
        </a>
        {/* <span>Copyright © 2019 QUD, Inc. All Rights Reserved.</span>
        <span>京ICP备2023002815号</span>
        <span>京公网安备 11010502034461号</span> */}
        {/* Copyright © 2019 QUDIAN, Inc. All Rights Reserved. | 京ICP备15026824号 |
        京公网安备 11010502034461号 */}
      </div>
    </div>
  );
};
