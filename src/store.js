import $ from 'jquery'
import Vue from 'vue'
import Vuex from 'vuex'
import { app , postsRef } from './firebase.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    posts: new Set(),
    is_in:false,
    email:null,
    loader:true
    // tab:'/',
  },
  // getters:{
  // 	current_tab:(state,getters)=>{
  // 		return this.$route.name;
  // 	},
  // },
  mutations: {
    fetchPosts: (state, tab) => {
      state.loader=true;
      state.posts = [];
      if (tab == 'Home') {
        postsRef.orderByChild('category')
          .on("value", (data) => {
          	state.posts=[];
            state.posts.push(data.val());
            state.loader=false;
          })
        return
      }
      postsRef.orderByChild("category").equalTo(tab)
        .on("value", (data) => {
          state.posts.push(data.val());
          state.loader=false;
        })
    }
  ,
  is_loggedin:(state)=>{
  app.auth().onAuthStateChanged((user)=> {
  if (user) {
    state.is_in=true
    state.email=user.email
    console.log(state)
  } else {
    state.is_in=false;
    state.email=null
  }
  return
});

  },
    out(state){
  app.auth().signOut().then(()=> {
  state.is_in=false;
}).catch(function(error) {
  console.log(error)
});
  }
}

})
