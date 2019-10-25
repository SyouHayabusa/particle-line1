import api from '../../config'
import urls from './urls'
import {
  Message
} from "element-ui"

//扩展http配置
const header = {
  // 'Authorization': 'Client-ID xxxxxxx'
}

export default {
  GETFN(key, params) {
    let url = {};
    url = urls[key];
    if (url) {
      return api.get(url, params)
    } else {
      Message.error("请检查接口地址是否存在")
    }
  },
  POSTFN(key, params) {
    let url = {};
    url = urls[key];
    if (url) {
      return api.post(url, params)
    } else {
      Message.error("请检查接口地址是否存在")
    }
  }
}
