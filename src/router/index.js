import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/components/dashboard'
import navbar from '@/components/navbar'
import form from '@/components/form'
// import {store} from '../store.js'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/welcome',
      name: 'Hello',
      component: Hello
    },{
      path:'/Web',
      name:'Web',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Android',
      name:'Android',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/IOS',
      name:'IOS',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Backend',
      name:'Backend',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Design',
      name:'Design',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/',
      name:'Home',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/Other',
      name:'Other',
      components:{
        navbar,
        posts: dashboard
      }
    },{
      path:'/form',
      name:'form',
      components:{
navbar,
        posts: form
      }
    },{
      path:'*',
      redirect:'/'
    }
  ]
})
