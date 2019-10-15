import axios from 'axios';
import { BASE_API_URL } from '../../configs/api';
import { JwtIntercept } from './interceptors/jwt.interceptor';
import { ErrorIntercept } from './interceptors/error.interceptor';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    // post: {
    //   'content-type': 'application/x-www-form-urlencoded',
    // },
  },
});

const registerIntercepters = (axiosInst) => {
  JwtIntercept(axiosInst.interceptors.request);
  ErrorIntercept(axiosInst.interceptors.response);
};

registerIntercepters(axiosInstance);

export default axiosInstance;
