<template>
	<div :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" @mousemove="xCoordinate">
		<p>Pixels across: {{ x }}</p>
	</div>
</template>

<script>

export default {
	data () {
		return {
			x: 0
		}
	},
	methods: {
		xCoordinate (e) {
			this.x = e.clientX
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
	width:100%;
	height:200px;
}

</style>
