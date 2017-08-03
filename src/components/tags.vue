<template>
<div>
<template v-for="(tag,index) in tags">
	<v-chip small label class="orange text-xs-center"> <v-icon left>label</v-icon>{{tag}}
    </v-chip>
</template>
</div>
</template>
<script>
	export default{
		name:'tagComponent',
		props:['tagString'],
		data(){
			return{
				tags:[]
			}
		},
		mounted(){
	this.construct_tags();
		},
		// computed:{
		// 	construct_tags:(value)=>{
		// 		console.log(this.tags);
		// 		this.tags=value.split(' ').join('#');
		// 	}
		// },
		methods:{
			construct_tags(){
				let tagsArray=this.tagString.split(' ');
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
				tagsArray.splice(3);

				this.tags=tagsArray;
				console.log(this.tags);
			}
		}
	}
</script>