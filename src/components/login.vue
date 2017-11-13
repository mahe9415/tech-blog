<template>
<v-dialog v-model="dialog" lazy persistent>
      <!-- <v-btn primary dark slot="activator"    -->
      <v-btn
        flat
        slot="activator"
      >{{email1}}</v-btn>
	<div class="landing pa-4" v-if="!is_in">
	<h2>Sign In</h2>
 <v-text-field v-model="username" label="User" required> </v-text-field>
 <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
<v-btn @click.native="signin">	Sign In	</v-btn>
    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
	</div>
	<div v-else class="landing pa-4">
		Are you sure want to Signout ?
		<div class="mt-2"> 
	<v-btn @click.native="out">	Yes	</v-btn>
    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
</div>
	</div>
</v-dialog>
</template>

<script>
import {app} from '../firebase.js'
import {store} from '../store.js'
	export default{
		name:'login',
		props:['email1'],
		data(){
			return{
				username:'',
				password:'',
				dialog:false 
			}
		},
		computed:{
			is_in(){
				return store.state.is_in;
			}
		},
		methods:{ out(){
                this.dialog=false; 
                 store.commit('out');
            }
,
	createUser(){
	app.auth().createUserWithEmailAndPassword(this.username, this.password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
},
			signin(){
				app.auth().signInWithEmailAndPassword(this.username, this.password).then(()=>{
					this.dialog=false;
				})
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
			}
		}
	}
</script>

<style scoped>
.landing{
	display: flex;
	justify-content: center;
	flex-direction:column;
	align-items: center;
	margin: auto;
	max-width: 320px;
	background: #fff;

}
	
</style>