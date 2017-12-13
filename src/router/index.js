import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewEmployee from '@/components/ViewEmployee'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    }
  ]
})