import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Content from './views/Content.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      
    },
    {
      path: '/content',
      name: 'content',
      component: Content,
      beforeEnter: (to, from, next) => {
        store.dispatch('fetchArticles').then(() => next())
      }
    }
  ]
})
