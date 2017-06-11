<template>
	<div>
		<div class="sender">Sending</div>
		<receiver :message="personal_message"></receiver>
	</div>	
</template>

<script>
import receiver from './receiver.vue'

export default {
	data () {
		return {
			counter: 0,
			x: 0,
			personal_message: 'passed information'
		}
	},
	methods: {
		increment () {
			this.counter++
		},
		decrement () {
			this.counter--
		},
		xCoordinate (e) {
			this.x = e.clientX
		}
	},
	components: {
		receiver
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sender{
	height:60px;
	background: linear-gradient(orange, red);
	font-size:40px;
	color:white;
}
</style>
