const header = () => import( /* webpackChunkName: 'daping' */ './header.vue')
const footer = () => import( /* webpackChunkName: 'daping' */ './footer.vue')
const ScrollTop = () => import( /* webpackChunkName: 'daping' */ './uptop.vue')


const Components = {
  install: function (Vue) {
    Vue.component('HeaderCom', header);
    Vue.component('FooterCom', footer);
    Vue.component('ScrollTop', ScrollTop);

  }
}

export default Components;
