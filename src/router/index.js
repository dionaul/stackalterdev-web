import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = () => import('@/page/Dashboard')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
