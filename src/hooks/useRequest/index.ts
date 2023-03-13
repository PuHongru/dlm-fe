import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useRequest = (url, data, config) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(() => {
    setLoading(true);
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios({
      url,
      params: data,
      method: 'get',
      cancelToken: source.token, // 将token注入到请求中
    })
      .then((result) => {
        setResult(result.data);
        setLoading(false);
      })
      .catch((thrown) => {
        // 只有在非取消的请求时，才调用setError和setLoading
        // 否则会报组件已被卸载还会调用方法的错误
        if (!axios.isCancel(thrown)) {
          setError(thrown);
          setLoading(false);
        }
      });
  }, [url, data]);

  useEffect(() => {
    const source = request();
    return () => source.cancel('Operation canceled by the user.');
  }, [request]);

  return {
    loading,
    result,
    error,
  };
};

export default useRequest;
