import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/components/dashboard'
import navbar from '@/components/navbar'
import form from '@/components/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'Hello',
      component: Hello
    },{
      path:'/Web',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Android',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/IOS',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Backend',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Design',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Other',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/form',
      components:{
navbar,
        posts: form
      }
    }
  ]
})
