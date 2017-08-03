<template>
  <div id="app">
  <v-app>
    <router-view name="header"></router-view>
    <router-view name="navbar"></router-view>
    <router-view name="posts"></router-view>
    <router-view name="footer"></router-view>
    <addnew></addnew>
  </v-app>
  </div>
</template>
<script>
import form from './components/form.vue'
  import $ from 'jquery'
export default {
  name: 'app',
 components:{
'addnew':form
 }
}
</script>

<style>
#app {
}
</style>
