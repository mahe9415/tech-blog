<template>

 <!-- <div class="text-xs-center">
    <v-btn outline large fab class="indigo--text">
      <v-icon>edit</v-icon>
    </v-btn>
  </div> -->
  <!-- <v-fab-transition> -->
     <!--  <v-btn
        class="orange"
        key="edit"
        dark
        cool
        fixed
        bottom
        right
        v-model="cool" v-if="modal" @click="openForm"
      >
        <v-icon>edit</v-icon>
      </v-btn> -->

<!-- <v-text-field label="URL" v-model="url"></v-text-field> -->
<!-- <v-btn @click="fetchMeta">fetch</v-btn> -->

    <!-- </v-fab-transition> -->

 <v-layout row wrap justify-center> 
      <div v-for="post in posts">
      <v-card flat class="mx-5 my-3">
      <a :href="post.url" target="_blank">
        <v-card-media
          class="white--text"
          height="200px"
          :src="post.thumbnail"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{post.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div class="description">
          {{post.description}}
            <!-- <span class="grey--text">Number 10</span><br> -->
            <!-- <span>Whitehaven Beach</span><br> -->
            <!-- <span>Whitsunday Island, Whitsunday Islands</span> -->
          </div>
        </v-card-title>
      </a>
      <v-layout flex column>
          <!-- <v-btn flat class="orange--text">Share</v-btn> -->
  <tagsElement :tagString="post.tags"></tagsElement>
    <!-- <v-chip label class="pink white--text">
      <v-icon left >#{{post.tags.split(' ').join('#') }}</v-icon>
    </v-chip> -->
        </v-layout>
      </v-card>
     </div>
        <div class="empty" key=5qw></div>
                <div class="empty" key=5qwee></div>
                <div class="empty" key=5ewde></div>
                <div class="empty" key=5esdsdwe></div>
  </v-layout>
  <!-- <addnew></addnew> -->

</template>
<script>
import { db } from '../firebase.js'
  import { postsRef } from '../firebase.js'
  import form from './form.vue'
  import $ from 'jquery'
  import tagsElement from './tags.vue'
export default{
name:'dashboard',
 data () {
 	return{        
    dialog: false,
    url:'',
      cool: false,
      hidden: false,
      tabs: 'two',
      modal:true
 	}
 },
 computed:{
  format_tags:(tags)=>{
    console.log(tags);
    let tagsArray = tags.split('');
    // console.log(tagsArray)

    return tagsArray;
  }
 },
 components:{
'addnew':form,
  tagsElement
 },
 firebase:{
      posts:postsRef
    },
    //   computed:{
    //   activeFab () {
    //     console.log("msg")
    //     switch (this.tabs) {
    //       case 'one': return { 'class': 'indigo', icon: 'share' }
    //       case 'two': return { 'class': 'orange', icon: 'edit' }
    //       case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
    //       default: return {}
    //     }
    //   }
    // },
 mounted(){
  // this.activeFab('one');
 	const post ={
 		Title:'A new blog post',
 		Description:'BentoBox, the website builder for restauranteurs, cooks up $4.8M Series A',
 		Thumb:'/static/img/te.jpg',
 		Url:'https://vookmark.co'
 	}
 // postsRef.push(post);
 // this.posts.push(post);
 // this.posts.push(post);
 // this.posts.push(post);
// this.posts.push(post);
  },
  methods:{
    openForm(){

    },
    fetchMeta(){
      var url=this.url;
      console.log(url);
let urlEncoded = encodeURIComponent(url);
const apiKey = '59817d1c07efcb0b00a6ff5a'; // <-- Replace with your app_id from https://www.opengraph.io/

// The entire request is just a simple get request with optional query parameters
let requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded + '?app_id=' + apiKey;

  
  $.getJSON(requestUrl, function( json ) {
  
    // Throw the object in the console to see what it looks like!
    console.log('json', json);
          
    // Update the HTML elements!
  });    
}
}
}

</script>
<style scoped>
	#example-1 {
    color: #fff;
    text-align: center;
  }
  #example-1 .flex {
    margin-bottom: 16px;
  }
  a{
  	text-decoration: none;
  }
  .card{
    width:370px;
    height:338px!important;
    /*margin:25px 30px;*/
  }
    .empty:empty {  
    flex: 0 1 466px;
    height: 0;
    width:466px;
}
  .description{
    font-size: 14px;
    color: #4A4A4A;
    font-family: 'Open Sans', sans-serif!important;
    /*font-weight: 600!important;*/
    margin: 6px 12px;
    margin-bottom: 0px;
    display: -webkit-box;
    line-height: 1.4;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    width: 370px;
    height: 41px;
    overflow: hidden;
  }
</style>