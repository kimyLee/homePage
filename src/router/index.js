import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import tools from '@/views/tools'
import article from '@/views/article'
import articleEdit from '@/views/articleEdit'
// import iframeParent from '@/views/iframeParent'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/tools',
      name: 'tools',
      component: tools
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/articleEdit',
      name: 'articleEdit',
      component: articleEdit
    }
  ]
})
