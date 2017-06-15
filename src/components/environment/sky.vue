<template>
	<div class="sky">
		<cloud></cloud>
		<cloud></cloud>
		<cloud></cloud>
		<cloud></cloud>
		<cloud></cloud>
		<cloud></cloud>
		<cloud></cloud>
		<cloud></cloud>
		<cloud></cloud>
	</div>
</template>

<script>

import cloud from './cloud.vue'

export default {
	data () {
		return {
			x: 0
		}
	},
	methods: {
		
	},
	mounted () {

	},
	components: {
		cloud
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.sky{
	width:300px;
	height:300px;
	background: linear-gradient(#0071c5, lightblue);
	position:absolute;
}
</style>


