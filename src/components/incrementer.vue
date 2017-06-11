<template>
	<div>
		<button @click="increment">Press Me!</button>
		<p>{{ counter }}</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			counter: 0
		}
	},
	methods: {
		increment () {
			this.counter++
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button{
	border:2px solid hsla(206, 100%, 29%, 1);
	background-color: hsla(206, 100%, 39%, 1);
	width:200px;
	height:40px;
	color:white;
	font-size:20px;
	margin:10px;
}

p{
	font-size:100px;
	font-weight:bold;
	margin:0;
	padding:0;
}
</style>
