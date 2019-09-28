import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          components: {
            default: () => import('@/views/home'),
            rightBar: () => import('@/views/rightBar')
          }
        },
        {
          path: '/datails',
          name: 'datails',
          components: {
            default: () => import('@/views/datails'),
            rightBar: () => import('@/views/rightBar')
          }
        }
      ]
    }
  ]
})
