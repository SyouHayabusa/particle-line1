import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import( /* webpackChunkName: 'daping' */ '@pages') //首页
const Login = () => import( /* webpackChunkName: 'daping' */ '@pages/login.vue') //首页
const Reg = () => import( /* webpackChunkName: 'daping' */ '@pages/resg.vue') //注册
const Search = () => import( /* webpackChunkName: 'daping' */ '@pages/search.vue') //注册


Vue.use(Router)


const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        needLogin: true
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resg',
      name: 'resg',
      component: Reg
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        needLogin: true
      }
    }
  ]
})


//全局后置钩子afterEach
router.afterEach((to, from) => {})

//全局守卫路由
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin == true) {
    if (window.sessionStorage.getItem('loginFlag') != '1') {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next();
  }
})

export default router;
