import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)


// 定义路由表
const routes = [
  {
    // 重定向
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/index',
        redirect: '/hot'
      },
      {
        path: '/hot',
        // components: {
        //   a: () => import('../components/Hot.vue'),
        //   b: () => import('../components/Cinema.vue')
        // }
        component: import('../components/Hot.vue')
      },
      {
        path: '/cinema',
        component: () => import('../components/Cinema.vue'),
        // 添加别名
        alias: '/asdf'
      },
      {
        path: '/wait',
        component: () => import('../components/Wait.vue')
      }
    ]
  },
  {
    path: '/classify/:id/:color',
    component: () => import('../views/Classify.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/detail/:id/:num',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
    props: true
  },
  {
    path: '*',
    component: () => import('../views/NotFound404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
