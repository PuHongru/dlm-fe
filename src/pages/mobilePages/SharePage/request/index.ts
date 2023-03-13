import axios from 'axios';

const baseURL = process.env.REACT_APP_API_PATH;

const url = {
  skuInfoUrl: baseURL + '/sku/like',
};

export default function getSkuInfo() {
  axios
    .post('http://101.43.209.27/sku/like?site=jd&sku_id=100036342265')
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}