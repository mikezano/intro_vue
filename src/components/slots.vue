<template lang="pug">
	.centered
		.slot-selector
			label(for="red") Red
			input( 
				type="radio" 
				id="red"
				value="slot_red" 
				v-model="picked")

			label( for="blue") Blue
			input(
				type="radio" 
				id="blue"
				value="slot_blue" 
				v-model="picked")
	
		component( :is="picked")
			p(slot="a") A
			p(slot="b") B
			p(slot="c") C
</template>


<script>
import slot_blue from './slot_blue.vue'
import slot_red from './slot_red.vue'
export default {
	data () {
		return {
			picked: 'slot_blue'
		}
	},
	methods: {
		slotSwitch (e) {
			console.log(e);
		}
	},
	components:{
		slot_blue,
		slot_red
	}
}
</script>


<style lang="scss">
	.centered{
		display:flex;
		flex-direction:column;
		align-items: center;

		.slot-selector{
			margin:20px;
			padding:20px;
			border:1px solid lightgray;
			background-color:whitesmoke;
			}
	}


</style>


