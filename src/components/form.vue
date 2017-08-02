<template>
    <v-layout row justify-center>

    <v-dialog v-model="dialog" width="300px;">
      <v-btn primary dark slot="activator">Open Dialog</v-btn>

      <v-card>
 
        <v-card-title>
          <span class="headline">Post Detail</span>
        </v-card-title>
        <v-card-text>      <v-container fluid>
                 <v-select
            label="Category"
            required
             v-bind:items="items"
          ></v-select>
          <v-text-field label="URL" required></v-text-field>
          <v-text-field label="Password" type="password" required></v-text-field>

      
          <v-text-field label="Tags" required       hint="Separate tags by space"
                           persistent-hint></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
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
  import $ from 'jquery'

  export default {
    data () {
      return {
        dialog: false,
 items: [
          { text: 'Android' },
          { text: 'Web' },
          { text: 'IOS' },
          { text: 'Backend' },
          { text: 'Other' },
        ]      }
    },
    methods:{

        fetchMeta(){
          this.dialog=false;
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
<style>
 /* .dialog--active{
    background: #fff;
  }*/
</style>