<template>

 <v-layout row wrap justify-end pr-2 orange>
 <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-btn flat exact to="/">Home</v-btn>
      <v-btn flat exact to="/Android">Android</v-btn>
      <v-btn flat exact to="/iOS">iOS</v-btn>
      <v-btn flat exact to="/Web">Web</v-btn>
      <v-btn flat exact to="/Backend">Backend</v-btn>
      <v-btn flat exact to="/Design">Design</v-btn>
      <v-btn flat exact to="/Other">Other</v-btn>
    <v-chip class="indigo white--text">
      <v-avatar>
        <v-icon>account_circle</v-icon>
      </v-avatar>
      Ranee
    </v-chip>
</v-layout>

</template>
<script>
export default {
	data(){
        return{
            drawer:true
}
        }
    }
</script>
<style >
</style>