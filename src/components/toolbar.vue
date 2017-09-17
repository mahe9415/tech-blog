<template>
<v-container fluid pa-0>
 <v-layout row wrap justify-end pr-2 orange>
 <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-btn flat exact to="/">Home</v-btn>
      <v-btn flat exact to="/Android">Android</v-btn>
      <v-btn flat exact to="/iOS">iOS</v-btn>
      <v-btn flat exact to="/Web">Web</v-btn>
      <v-btn flat exact to="/Backend">Backend</v-btn>
      <v-btn flat exact to="/Design">Design</v-btn>
      <v-btn flat exact to="/Other">Other</v-btn>
      <!-- <v-menu offset-y> -->
    <!--   <v-chip class="orange white--text" slot="activator">
      <v-avatar>
        <v-icon >account_circle</v-icon>
      </v-avatar>
      {{email1}}
    </v-chip> -->
      <login :email1="email1"> </login>
     <!--   <v-btn  class="red white--text" slot="activator">{{email1}}
      <v-icon dark right>account_circle</v-icon>
    </v-btn> -->
  <!--    <v-list>
        <v-list-tile>
                  <v-list-tile-title  @click="out">logout</v-list-tile-title>
</v-list-tile>
        </v-list> -->
    <!-- </v-menu> -->
</v-layout>
</v-container>
</template>
<script>
  import {store} from '../store.js'
  import login from '../components/login.vue'
export default {
  components:{
login
  },
	data(){
        return{
            email:store.state.email,
            // dialog:false  
            }
        },
        computed:{
           is_in1(){
            console.log(store.state.is_in)
         return store.state.is_in;
           },
           email1(){

         return store.state.email || 'Login'
     }
        },
        mounted(){
            // console.log(this.is_in)
        },
        methods:{
            out(){
                store.commit('out')
            }
        }
    }
</script>
<style >
</style>