<template>
 <v-layout row wrap justify-center> 
      <div v-for="post in posts[0]">
      <v-card flat class="mx-5 my-3">
      <a :href="post.url" target="_blank">
        <v-card-media
          class="white--text"
          height="200px"
          :src="post.thumbnail || '/static/img/te.jpg'"
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
          </div>
        </v-card-title>
      </a>
      <v-layout flex column>
  <tagsElement :tagString="post.tags"></tagsElement>
    <!-- <v-chip label class="pink white--text">
      <v-icon left >#{{post.tags.split(' ').join('#') }}</v-icon>
    </v-chip> -->
     <template>
  <!--    <template v-for="(tag,index) in post.tags">
    <v-chip small label class="orange text-xs-center"> <v-icon left>label</v-icon>{{tag}}
    </v-chip>
  </template> -->
  </template>
        </v-layout>
      </v-card>
     </div>
        <div class="empty" key=5qw></div>
                <div class="empty" key=5qwee></div>
                <div class="empty" key=5ewde></div>
                <div class="empty" key=5esdsdwe></div>
  </v-layout>

</template>
<script>
import { db } from '../firebase.js'
  import { postsRef } from '../firebase.js'
  // import form from './form.vue'
  import $ from 'jquery'
  import tagsElement from './tags.vue'
  import { mapState } from 'vuex'
  import {store} from '../store.js'

export default{
name:'dashboard',
 data () {
 	return{        
    dialog: false,
    url:'',
      cool: false,
      hidden: false,
      tabs: 'two',
      modal:true,
      // posts1:[]
 	}
 },
 computed:{
  format_tags(tags){
    // console.log(tags);
    let tagsArray = tags.split('');
    // console.log(tagsArray)
    return tagsArray;
  }, posts () {
      return store.state.posts
    },
    limitTags(arr){
      return arr.splice(3);
    }
 },
 components:{
// 'addnew':form,
  tagsElement
 },
 firebase:{
      Lposts:postsRef
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
    // },0
 mounted(){
  // console.log(this.posts)
  var temp;
  const that=this;

  // console.log(this);
  // console.log(this.$route);
// if(this.$route.fullPath=='/'){
//   this.posts1=this.posts
//   return;
// }
//   postsRef.orderByChild("category").equalTo(this.$route.fullPath.split('/')[1])
//   .on("child_added", (data)=> {
//    // temp=data.val();
//    this.posts1.push(data.val());
// })
  // console.log(temp);
  // this.activeFab('one');
 // postsRef.push(post);
 // this.posts.push(post);
 // this.posts.push(post);
 // this.posts.push(post);
// this.posts.push(post);
  },
  methods:{
    openForm(){

    },
//     fetchMeta(){
//       var url=this.url;
//       console.log(url);
// let urlEncoded = encodeURIComponent(url);
// const apiKey = '59817d1c07efcb0b00a6ff5a'; // <-- Replace with your app_id from https://www.opengraph.io/

// // The entire request is just a simple get request with optional query parameters
// let requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded + '?app_id=' + apiKey;

  
//   $.getJSON(requestUrl, function( json ) {
  
//     // Throw the object in the console to see what it looks like!
//     console.log('json', json);
          
//     // Update the HTML elements!
//   });    
// }
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