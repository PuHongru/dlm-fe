import { Image, Button } from 'antd-mobile';
import logo40 from './images/icon.png';
export default (props) => {
  return (
    <>
      <div className="title">
        <Image className="small-logo" src={logo40} />
        <span className="description">
          为您提供全网最低价商品，打开多乐买省钱APP
        </span>
        <Button className="download-btn">立即打开</Button>
      </div>
    </>
  );
};
