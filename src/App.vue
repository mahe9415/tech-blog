<template>
  <div id="app">
  <v-app>
    <router-view name="header"></router-view>
    <router-view name="navbar"></router-view>
    <router-view name="posts"></router-view>
    <router-view name="footer"></router-view>
    <addnew v-if="is_in"></addnew>
  </v-app>
  </div>
</template>
<script>
import form from './components/form.vue'
import {store} from './store.js'
import {app} from './firebase.js'
export default {
  name: 'app',
 components:{
'addnew':form
 },
 data(){
  return{
    // is_in:store.state.is_in
  }
 },
 computed:{
  is_in(){
    return store.state.is_in
  }
 },
  mounted(){
    // let boolean;
//    app.auth().onAuthStateChanged((user)=> {
//   if (user) {
//     this.is_in=true
//     console.log(user)
//     // User is signed in.
//   } else {
//     // boolean =false
//     console.log("NOT IN")
//     // No user is signed in.
//   }
//   return
// });
 },
 methods:{
  out(){
// app.delete()
app.auth().signOut().then(()=> {
  this.is_in=false;
  // Sign-out successful.
  console.log("outtttttttttttt")
}).catch(function(error) {
  // An error happened.
  console.log(error)
});
  }
 }
}
</script>

<style>
#app {
}
</style>
