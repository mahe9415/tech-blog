<template>
    <v-layout row justify-center>

    <v-dialog v-model="dialog" width="300px;">
      <!-- <v-btn primary dark slot="activator">Open Dialog</v-btn> -->
         <v-btn
        class="orange"
        dark
        slot="activator"
        fixed
        bottom
        right
        fab
        direction="bottom"
        icon
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Post Detail</span>
        </v-card-title>
        <v-card-text>      <v-container fluid>
                 <v-select
            label="Category"
            required
            v-model = "category"
             v-bind:items="items"
          ></v-select>
          <v-text-field v-model="url" label="URL" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>

      
          <v-text-field label="Tags" v-model="tags"  hint="Separate tags by space"
                           persistent-hint></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
         <v-snackbar
      :timeout=2000
      error
      absolute
      bottom
      right
      v-model="snackbar"
    >
     {{text}}
     </v-snackbar>
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click="fetchMeta"> Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-layout>
  <!--   <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent>
      <v-btn primary dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Email" required></v-text-field>
          <v-text-field label="Password" type="password" required></v-text-field>
          <v-text-field label="Legal first name" required></v-text-field>
          <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
          <v-text-field label="Legal last name" hint="example of persistent helper text"
            persistent-hint
            required
          ></v-text-field>
          <v-select
            label="Age"
            required
            :items="['0-17', '18-29', '30-54', '54+']"
          ></v-select>
          <v-select
            label="Interests"
            multiple
            autocomplete
            chips
            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout> -->
</template>
<script>
  import { db } from '../firebase.js'
  import { postsRef } from '../firebase.js'
  import $ from 'jquery'
  export default {
    data () {
      return {
        dialog: false,
        url:'',
        category:null,
        tags:null,
        text:null,
        snackbar:false,
        password:null,
        duplicate:null,
 items: [
           'Android' ,
           'Web' ,
           'IOS' ,
           'Backend' ,
            'Design',
           'Other',
        ]    }
    },
    firebase : {
    posts:postsRef
    },
    methods:{
      Vurl(value){
var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(value) || false
      
      },
        fetchMeta(){
          let url=this.url.trim();

          if(url== "" || this.category == "" ){ 
            this.text="Please Fill the form"
            this.snackbar=true;
            return 
          }
          if(!this.Vurl(url)){
            this.text="Please enter a valid Url"
            this.snackbar=true;
            return 
          }
          // if(this.password !== 'techblog'){
          //   this.text="Wrong Password !"
          //   this.snackbar=true;
          //   return
          // }
       this.posts.forEach((post)=>{
    if(post.url== url){
      this.duplicate=true;
      console.log("duplicate");
    }
  })
 
    if(this.duplicate){
        this.text="already exists";
      this.snackbar=true;
      return;
    }
          

      // console.log(url);
let urlEncoded = encodeURIComponent(url);
const apiKey = '59817d1c07efcb0b00a6ff5a'; // <-- Replace with your app_id from https://www.opengraph.io/

// The entire request is just a simple get request with optional query parameters
let requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded + '?app_id=' + apiKey;

  
  $.getJSON(requestUrl, ( json )=> {
  const post={
    'title': json.hybridGraph.title,
    'description': json.hybridGraph.description,
    'thumbnail':json.hybridGraph.image,
    'siteIcon':json.hybridGraph.favicon,
    url,
    'tags': this.tags
  }

  postsRef.push(post);
  this.dialog=false;
    // Throw the object in the console to see what it looks like!
  
          
    // Update the HTML elements!
  });    
}
    }
  }
</script>
<style>
 /* .dialog--active{
    background: #fff;
  }*/
</style>