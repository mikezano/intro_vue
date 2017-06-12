<template>
	<div class="receiver">
		Received : {{message}}
	</div>
</template>

<script>

export default {
	name: 'receiver',
	props: {
		message:{
			type: String,
			required: true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.receiver{
	height:60px;
	background: linear-gradient(yellow, green);
	font-size:40px;
	color:white;
}
</style>
