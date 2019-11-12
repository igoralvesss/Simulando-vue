import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE-URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('./views/Login.vue')
    },
    {
      path: '/extras',
      name: 'extras',
      component: () => import ('./views/Extras.vue')
    },

    {
      path: '/vestibulares',
      name: 'vestibulares',
      component: () => import ('./views/Vestibulares.vue')
    },

    {
      path: '/sobre',
      name: 'sobre',
      component: () => import ('./views/Sobre.vue')
    },

    {
      path: '/adm/enem',
      name: 'adm-enem',
      component: () => import ('./views/adm/Enem.vue')
    },
    
    {
      path: '/adm/fatec',
      name: 'adm-fatec',
      component: () => import ('./views/adm/Fatec.vue')
    },
    {
      path: '/adm/fuvest',
      name: 'adm-fuvest',
      component: () => import ('./views/adm/Fuvest.vue')
    },
    {
      path: '/dashboards/dashboard-user',
      name: 'dashboard-user',
      component: () => import ('./views/dashboads/Dashboard-user.vue')
    },
    
    {
      path: '/dashboards/dashboard-adm',
      name: 'adm-dashboard',
      component: () => import ('./views/dashboads/Dashboard-adm.vue')
    },
  ]
})
