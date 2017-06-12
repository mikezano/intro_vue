<template lang="pug">
	div
		ul
			li(
				is="comment" 
				v-for="comment in comments"
				v-bind:commentpost="comment")
		input(
			v-model="newComment"
			v-on:keyup.enter="addComment"
			placeholder="Add Comment"
		)
</template>


<script>
import comment from './comment.vue'

export default {
	data() {
		return {
			newComment: '',
			comments: [
				'Looks great Julianne!',
				'I love the sea',
				'Where are you at?'
			]
		}
	},
	methods: {
		addComment: function(){
			this.comments.push(this.newComment)
			this.newComment = ''
		}
	},
	components: {
		comment
	}
}
</script>

<style scoped>
	ul{
		list-style-type:none;
		background: linear-gradient(orange, orangered);
		color:white;
		padding:20px;
	}
	li{
		margin:10px;
		font-size:20px;
	}
	input{
		padding:10px;
		font-size:20px;
	}

	.o{
		background-color:#0071c5;
		width:20px;
		height:20px;
		border-radius:10px;
	}
</style>
