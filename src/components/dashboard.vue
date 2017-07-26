<template>
<div>  <v-tabs dark grow>
    <v-toolbar class="cyan" dark>
      <v-toolbar-title>Curated Posts</v-toolbar-title>
    </v-toolbar>
    <v-tabs-bar slot="activators" class="cyan">
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item
        v-for="(item, i) in items"
        :key="i"
        :href="'#tab-' + (i + 1)"
      >
        {{ item }}
      </v-tabs-item>
      <v-menu :nudge-width="100" left bottom>
        <v-list class="grey lighten-3">
          <v-list-tile
            tag="a"
            v-for="n in 4"
            :key="n"
          >
            Item {{ n }}
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-tabs-bar>
    <v-tabs-content
      v-for="i in 5"
      :key="i"
      :id="'tab-' + i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tabs-content>
  </v-tabs>
      <v-layout row wrap justify-center> 
      <div v-for="post in posts">
      <v-card class="mx-5 my-3">
        <v-card-media
          class="white--text"
          height="200px"
          :src="post.thump"
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
          <div>
          {{post.description}}
            <!-- <span class="grey--text">Number 10</span><br> -->
            <!-- <span>Whitehaven Beach</span><br> -->
            <!-- <span>Whitsunday Island, Whitsunday Islands</span> -->
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <a :href="post.url" target="_blank">
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
export default{
name:'dashboard',
 data () {
 	return{
 		posts:[],
     items: [
          'web', 'shopping', 'videos', 'images', 'news'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      
 	}
 },
 mounted(){
 	const post={
 		title:'A new blog post',
 		description:'BentoBox, the website builder for restauranteurs, cooks up $4.8M Series A',
 		thump:'/static/img/te.jpg',
 		url:'https://vookmark.co'
 	}
 	this.posts.push(post);
 this.posts.push(post);
 this.posts.push(post);
 this.posts.push(post);
this.posts.push(post);
  }
}
</script>
<style>
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
</style>