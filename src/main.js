/*************************IE兼容处理*************************************/
import 'babel-polyfill'

if (Number.parseInt === undefined) Number.parseInt = window.parseInt;
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat;

(function () {
  let lastTime = 0;
  let vendors = ['ms', 'moz', 'webkit', 'o'];
  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      let currTime = new Date().getTime();
      let timeToCall = Math.max(0, 16 - (currTime - lastTime));
      let id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
}());
/*************************IE兼容处理*************************************/


import Vue from 'vue'
import router from './router'


/*************************UI*************************************/
import "@styles/index.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*************************components*************************************/
import Components from '@com'

/*************************plugins*************************************/
import GUtils from '@utils/global'
// import {
//   provinceAndCityData,
//   regionData,
//   provinceAndCityDataPlus,
//   regionDataPlus,
//   CodeToText,
//   TextToCode
// } from 'element-china-area-data'
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'
import animate from 'animate.css'

/*************************USE*************************************/
Vue.use(Components)
Vue.use(GUtils)
Vue.use(ElementUI)
Vue.use(vueParticleLine)


import App from './App'
Vue.config.productionTip = false

/* eslint-disable no-new */
window.$project = new Vue({
  router,
  components: {
    App
  },
  template: '<App/>'
})

window.$project.$mount('#app')
