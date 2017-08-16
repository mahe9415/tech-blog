<template>
	<div class="landing">
	<h2>SignUp</h2>
 <v-text-field v-model="username" label="User" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
		<v-btn @click.native="signin">
			signup
		</v-btn>
	</div>
</template>

<script>
import {app} from '../firebase.js'
	export default{
		name:'login',
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
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
				app.auth().signInWithEmailAndPassword(this.username, this.password)
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
	max-width: 500px;
}
	
</style>