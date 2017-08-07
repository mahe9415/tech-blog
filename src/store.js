import $ from 'jquery'
import Vue from 'vue'
import Vuex from 'vuex'
import {postsRef} from './firebase.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		posts:[]
		// tab:'/',
	},
	// getters:{
	// 	current_tab:(state,getters)=>{
	// 		return this.$route.name;
	// 	},
	// },
	mutations:{
		fetchPosts:(state,tab)=>{
			// console.log("fetched");
			state.posts=[];
			// console.log(tab)
			if(tab=='Home'){
				// console.log(msg)
				postsRef.orderByChild('category')
  .on("child_added", (data)=> {
   // temp=data.val();
   // console.log(JSON.stringify(data.val()))
   state.posts.push(data.val());
})
				// console.log(state.posts)
				return
			}
	postsRef.orderByChild("category").equalTo(tab)
  .on("child_added", (data)=> {
   // temp=data.val();
   console.log(JSON.stringify(data.val()))
   state.posts.push(data.val());
})
		}
	}

})