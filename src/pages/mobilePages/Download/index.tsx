import { NavBar, Image, Button } from 'antd-mobile';
import logo40 from './images/icon.png';
import logo from './images/logo.png';
import './index.less';
// import bgImg from './images/bg-img.png';

export default (props) => {
  return (
    <div className="download">
      <NavBar className="bar">多乐买APP下载</NavBar>
      <div className="title">
        <Image className="small-logo" src={logo40} />
        <span className="description">
          为您提供全网最低价商品，打开多乐买省钱APP
        </span>
        <Button className="download-btn">立即打开</Button>
      </div>
      <Image className="logo" src={logo} />
      <Button className="download-btn2">下载多乐买APP</Button>
      {/* <Image className="bg-img" src={bgImg} /> */}
    </div>
  );
};
