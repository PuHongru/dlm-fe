import NProgress from '@/config/nprogress';
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const config = {
  // 默认请求地址
  baseUrl: process.env.REACT_APP_API_PATH,
  // 超时时间(10s)
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true,
};
