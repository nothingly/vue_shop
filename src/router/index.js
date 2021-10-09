import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

// 导入全局样式
import '../assets/css/global.css'
// 导入字体图标
import '../assets/fonts/iconfont.css'
import '../assets/font/iconfont.css'
Vue.use(VueRouter)

const router = new VueRouter({
  routes : [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/home',
      component: Home
    }
  
  ]
  
})
 router.beforeEach(( to , from ,next) => {
      if(to.path === '/login')  return next()
      
     const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')

  next()
 
    })
export default router
