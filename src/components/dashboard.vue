<template>
<div> 
 <!-- <div class="text-xs-center">
    <v-btn outline large fab class="indigo--text">
      <v-icon>edit</v-icon>
    </v-btn>
  </div> -->
 <v-dialog v-model="modal" width="100%">
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
  </v-layout>
  <!-- <v-fab-transition> -->
      <v-btn
        class="orange"
        key="edit"
        dark
        fab
        fixed
        bottom
        right
        v-model="fab" v-if="modal" @click="openForm"
      >
        <v-icon>edit</v-icon>
        <!-- <v-icon>close</v-icon> -->
      </v-btn>
    <form></form><!-- </v-fab-transition> -->

 <v-layout row wrap justify-center> 
      <div v-for="post in posts">
      <v-card flat class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          :src="post.Thumb"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{post.Title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div class="description">
          {{post.Description}}
            <!-- <span class="grey--text">Number 10</span><br> -->
            <!-- <span>Whitehaven Beach</span><br> -->
            <!-- <span>Whitsunday Island, Whitsunday Islands</span> -->
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <a :href="post.Url" target="_blank">
          <v-btn flat class="orange--text">  Explore
          </v-btn></a>
        </v-card-actions>
      </v-card>
     <!--     <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>
          <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>    <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>    <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>    <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>    <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>    <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>    
      <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/te.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card> -->
      </div>
  </v-layout>
  </div>
</template>
<script>
import { db } from '../firebase.js'
  import { postsRef } from '../firebase.js'
  import form from './form.vue'
export default{
name:'dashboard',
 data () {
 	return{        dialog: false
,
      fab: false,
      hidden: false,
      tabs: 'two',
      modal:true,
     items: [
          'web', 'shopping', 'videos', 'images', 'news'
        ],
 	}
 },
 components:{
form
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
    height:338px;
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