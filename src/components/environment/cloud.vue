<template>
	<div class="cloud">
	</div>
</template>

<script>

export default {
	data () {
		return {
			x: 0,
			y: 0,
		}
	},
	methods: {
		randomizePos () {
			this.x = Math.floor(Math.random()*200);
			this.y = Math.floor(Math.random()*200);
		}
	},
	mounted () {
		
		this.randomizePos();
	
		this.$el.style.left = this.x + "px";
		this.$el.style.top = this.y + "px";
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cloud{
	width:20px;
	height:20px;
	border-radius:10px;
	background:linear-gradient(whitesmoke, gray);
	position:absolute;
}
</style>


