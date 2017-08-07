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
      construct_tags(tagString){
        console.log(tagString)
        if(tagString==null){
          return [];
        }
        let tagsArray=tagString.split(' ');
        tagsArray.forEach((tag,index)=>{
          if(tag.trim()== ''){
            tagsArray.splice(index,1);
          }
        })
        tagsArray.forEach((tag,index)=>{
          if(tag.length>15){
            tagsArray[index]=tag.split('',14).join('');
          }
        })
       // tagsArray.splice(3);
       //  console.log(tagsArray)
       return tagsArray;
      },
      Vurl(value){
        // console.log(value)
// var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
//   '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//   '(\\:\\d+)?(\\/[-a-zA-Z0-9\\d%_.~+]*)*'+ // port and path
//   '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//   '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
// const pattern=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
// if(!pattern.test(value)){
//   return false;
// }
var re_weburl = new RegExp(
  "^" +
    // protocol identifier
    "(?:(?:https?|ftp)://)" +
    // user:pass authentication
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
      // IP address exclusion
      // private & local networks
      "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
      "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
      "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
      "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
      "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
    "|" +
      // host name
      "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
      // domain name
      "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
      // TLD identifier
      "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
      // TLD may end with dot
      "\\.?" +
    ")" +
    // port number
    "(?::\\d{2,5})?" +
    // resource path
    "(?:[/?#]\\S*)?" +
  "$", "i"
);
if(re_weburl.test(value)){
  console.log("passed "+value)
  return value;
}
// return pattern.test(value) || false
      return false;
      },
        fetchMeta(){
        

          if(this.url.trim()== "" || this.category == "" ){ 
            this.text="Please Fill the form"
            this.snackbar=true;
            return 
          }
          if(!this.Vurl(this.url)){

            this.text="Please enter a valid Url"
            this.snackbar=true;
            return 
          }
          if(this.password != 'true'){
            // console.log(this.password)
            this.text="Wrong Password !"
            this.snackbar=true;
            return
          }
      const dup=this.posts.some((post)=> post.url == this.url.trim());
      console.log(dup)
if(dup){
      this.text="Already Exists!"
            this.snackbar=true;
        return
      }
      // console.log(url);
let urlEncoded = encodeURIComponent(this.url.trim());
const apiKey = '59817d1c07efcb0b00a6ff5a'; // <-- Replace with your app_id from https://www.opengraph.io/

// The entire request is just a simple get request with optional query parameters
let requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded + '?app_id=' + apiKey;

let post={};
  $.getJSON(requestUrl, ( json )=> {
    // console.log(json);
    if(json.error){
    this.text="Not a valid URL";
    this.snackbar=true;
    return;
    }
    post={
    'title': json.hybridGraph.title,
    'description': json.hybridGraph.description,
    'thumbnail':json.hybridGraph.image,
    'siteIcon':json.hybridGraph.favicon || null,
    'url':this.url.trim(),
    'tags': this.construct_tags(this.tags),
    'category':this.category
  }
  this.url='';
  this.password='';
  this.tags='';
  this.dialog=false;
  }).then((doc)=>{
     postsRef.push(post);
console.log("post  "+JSON.stringify(post))
  })
 
}
    }
  }
</script>
<style>
 /* .dialog--active{
    background: #fff;
  }*/
</style>