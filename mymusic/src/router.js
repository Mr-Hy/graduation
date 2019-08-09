import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './components/mymusic/login'
import Music from './components/mymusic/index'
import Ranking from './components/mymusic/RankingList'
import Footer from './components/mymusic/footer'
import Register from './components/mymusic/register'
import User from './components/mymusic/user'


import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Router)

// require styles
import 'swiper/dist/css/swiper.css'

export default new Router({
  routes: [
    {path: '/login',name: 'Login',component: Login},
    {path: '/',name: 'Music',component: Music},
    {path: '/ranking',name: 'Ranking',component: Ranking},
    {path: '/footer',name: 'Footer',component: Footer},
    {path: '/register',name: 'Register',component: Register},
    {path: '/user',name: 'User',component: User},
  ]
})
