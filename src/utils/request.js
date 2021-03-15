import axios from "axios";
// import { Notify } from "vant";
import { serverUrl } from "./tools";
import {getToken} from './auth'


/* 超时时间 */
const instance = axios.create({
  timeout: 5000,
  baseURL: serverUrl,
});
/* 全局拦截 */

// 全局请求拦截,网络请求之前触发
instance.interceptors.request.use(
  function (config) {
    // if (getToken()) {
    //   config.headers.authorization = "Bearer " + getToken();
    // }
    config.headers.authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 全局响应拦截, 网络请求之后触发
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error && error.message.indexOf("timeout") > -1) {
      // Notify({ type: "warning", message: "网络超时啦,待会再试试吧~" });
    }
    return Promise.reject(error);
  }
);

/* 简写get请求 */
export const get = (url, params) => instance.get(url, { params });
/* 简写post请求 */
export const post = (url, data) => instance.post(url, data);

/*delete请求 */
export const delate = (url, params) => instance.delete(url, { params });
/*put请求*/
export const put = (url, data) => instance.put(url, data);
