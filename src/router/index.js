import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/components/dashboard'
import navbar from '@/components/navbar'
import form from '@/components/form'
import login from '@/components/login'
import toolbar from '@/components/toolbar'
// import {store} from '../store.js'
Vue.use(Router)

export default new Router({
mode:'history',
  routes: [ {
      path: '/login',
      name: 'login',
      components:{
         posts: login
       } 
    },,
    {
      path: '/welcome',
      name: 'Hello',
      component: Hello
    },{
      path:'/Web',
      name:'Web',
      components:{
        navbar:toolbar,
        posts: dashboard
      }
    },{
      path:'/Android',
      name:'Android',
      components:{
        navbar:toolbar,
        posts: dashboard
      }
    },{
      path:'/IOS',
      name:'IOS',
      components:{
        navbar:toolbar,
        posts: dashboard
      }
    },{
      path:'/Backend',
      name:'Backend',
      components:{
        navbar:toolbar,
        posts: dashboard
      }
    },{
      path:'/Design',
      name:'Design',
      components:{
        navbar:toolbar,
        posts: dashboard
      }
    },{
      path:'/',
      name:'Home',
      components:{
        navbar:toolbar,
        posts: dashboard
      }
    },{
      path:'/Other',
      name:'Other',
      components:{
        navbar:toolbar,
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
