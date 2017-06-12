<template>
	<div>
		<input v-model="myMessage" placeholder="edit me" />
		<receiver :message="myMessage"></receiver>
	</div>
</template>

<script>
import receiver from './receiver.vue'

export default {
	data(){
		return {
			myMessage: 'This message is a string'
		}
	},
	components: {
		receiver
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
