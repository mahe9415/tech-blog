import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/components/dashboard'
import navbar from '@/components/navbar'

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
    	components:{
        navbar,
        posts: dashboard
      }
    }
  ]
})
