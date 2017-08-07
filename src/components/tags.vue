<template>
<div>
<template v-for="(tag,index) in tags(tagString)">
	<v-chip small label class="orange text-xs-center"> <v-icon left>label</v-icon>{{tag}}
    </v-chip>
</template>
</div>
</template>
<script>
	export default{
		name:'tagComponent',
		props:['tagString'],
		methods:{
			tags:(tagString)=>{

				if(tagString==undefined){
					return []
				}
				tagString=Array.from(tagString);
				if(tagString.length>2){
					tagString.splice(3);
					return tagString
				}
				return tagString;
				// tagString.splice(3);
				// console.log(typeof(tagString));
				// let tags=[];
	// 			tags.push(tagString[0]);
	// 			tags.push(tagString[1]);
	// 			tags.push(tagString[2]);
	// 				tags.forEach((tag,index)=>{
	// 				console.log(tag);
	// 				if(tag == undefined){
	// 					tags.splice(index,1);
	// 				}
	// 			})
	// // 			tags
	// 			// tags.push(tagString[1]);
	// 			// tags.push(tagString[2]);
				// console.log(tags)
				// return tags;
			}
		}
		// data(){
		// 	return{
		// 		tags:[]
		// 	}
		// },
	// 	mounted(){
	// this.construct_tags();
	// 	},
	// 	// computed:{
	// 	// 	construct_tags:(value)=>{
	// 	// 		console.log(this.tags);
	// 	// 		this.tags=value.split(' ').join('#');
	// 	// 	}
	// 	// },
	// 	methods:{
	// 		construct_tags(){
	// 			let tagsArray=this.tagString.split(' ');
	// 			tagsArray.forEach((tag,index)=>{
	// 				if(tag.trim()== ''){
	// 					tagsArray.splice(index,1);
	// 				}
	// 			})
	// 			tagsArray.forEach((tag,index)=>{
	// 				if(tag.length>15){
	// 					tagsArray[index]=tag.split('',14).join('');
	// 				}
	// 			})
	// 			tagsArray.splice(3);

	// 			this.tags=tagsArray;
	
	// 		}
	// 	}
	}
</script>