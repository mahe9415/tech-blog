import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'Hello',
      component: Hello
    },{
    	path:'/',
    	name:'dashboard',
    	component:dashboard
    }
  ]
})
