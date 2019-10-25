import axios from 'axios'
import browser from './browser.js'
import {
  Loading,
  Message
} from "element-ui"
import qs from 'qs'
// 创建 axios 实例
let http = axios.create({
  // headers: {'Content-Type': 'application/json'},
  timeout: 35000
})

let loadingInstance;

// 设置 post、put 默认 Content-Type
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
http.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
http.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 添加请求拦截器
http.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    fullscreen: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  if (config.method === 'post' || config.method === 'put') {
    // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
    // config.data = JSON.stringify(config.data)
    // config.data = qs.stringify(config.data)
  } else if (config.method === 'get' && browser.isIE) {
    // 给GET 请求后追加时间戳， 解决IE GET 请求缓存问题
    let symbol = config.url.indexOf('?') >= 0 ? '&' : '?'
    config.url += symbol + '_=' + Date.now()
  }


  setTimeout(() => {

    loadingInstance.close(); //关闭loading
  }, 5000)

  return config
}, error => {
  if (error) {
    Message.error(error)
  }
  // 请求错误处理
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  loadingInstance.close(); //关闭loading
  let {
    data
  } = response;
  return data
}, error => {
  let data = {};
  let err = {
    message: ""
  };
  if (error && error.response) {
    data = error.response;
    switch (data.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        err.message = '未授权，请重新登录'
        break;
      case 403:
        err.message = '拒绝访问'
        break;
      case 404:
        err.message = '请求错误,未找到该资源'
        break;
      case 405:
        err.message = '请求方法未允许'
        break;
      case 408:
        err.message = '请求超时'
        break;
      case 500:
        err.message = '服务器端出错'
        break;
      case 501:
        err.message = '网络未实现'
        break;
      case 502:
        err.message = '网络错误'
        break;
      case 503:
        err.message = '服务不可用'
        break;
      case 504:
        err.message = '网络超时'
        break;
      case 505:
        err.message = 'http版本不支持该请求'
        break;
      default:
        err.message = `连接错误${data.status}`
    }

    Message.error(err.message)
  }

  return Promise.reject(data)
})

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function () {
  return http
}
