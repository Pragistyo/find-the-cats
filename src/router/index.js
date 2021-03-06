import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Detail from '@/components/Detail'
// const Home = () => import('@/components/Home')
// const Post = () => import('@/components/Post')
// const Detail = () => import('@/components/Detail')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/detail/:id',
      props: true,
      name: 'Detail',
      component: Detail
    }
  ]
})
