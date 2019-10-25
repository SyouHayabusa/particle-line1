import echarts from 'echarts'
import db from "./db.js"

const GUtils = {
  install: function (Vue) {
    Object.defineProperties(Vue.prototype, {
      $echarts: {
        get() {
          return echarts
        },
        enumerable: false,
        configurable: false
      },
      $ls: {
        get() {
          return db.$ls //手机
        },
        enumerable: false, // 不可枚举
        configurable: false // 不可重写
      },
      $ss: {
        get() {
          return db.$ss //手机
        },
        enumerable: false, // 不可枚举
        configurable: false // 不可重写
      }
    })
  }
}

export default GUtils;
