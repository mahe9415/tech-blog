import $ from 'jquery'
import Vue from 'vue'
import Vuex from 'vuex'
import { app , postsRef } from './firebase.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    posts: new Set(),
    is_in:false,
    email:null
    // tab:'/',
  },
  // getters:{
  // 	current_tab:(state,getters)=>{
  // 		return this.$route.name;
  // 	},
  // },
  mutations: {
    fetchPosts: (state, tab) => {
      // console.log("fetched");
      state.posts = [];
      // console.log(tab)
      if (tab == 'Home') {
        // console.log(msg)
        postsRef.orderByChild('category')
          .on("value", (data) => {
          	state.posts=[];
            // temp=data.val();
            // console.log(JSON.stringify(data.val()))
            state.posts.push(data.val());
          })
        // console.log(state.posts)
        return
      }
      postsRef.orderByChild("category").equalTo(tab)
        .on("value", (data) => {
          // temp=data.val();
          // console.log(data.val())
          state.posts.push(data.val());
        })
    }
  ,
  is_loggedin:(state)=>{
  app.auth().onAuthStateChanged((user)=> {
  if (user) {
    state.is_in=true
    state.email=user.email
    console.log(state)
    // User is signed in.
  } else {
    state.is_in=false;
    state.email=null
    // boolean =false
    console.log("NOT IN")
    // No user is signed in.
  }
  return
});

  },
    out(state){
// app.delete()
app.auth().signOut().then(()=> {
  state.is_in=false;
  // Sign-out successful.
  console.log("outtttttttttttt")
}).catch(function(error) {
  // An error happened.
  console.log(error)
});
  }
}

})
