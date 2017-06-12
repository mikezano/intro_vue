<template>
	<div>
	<div class="blue"></div>
	<slot name="b"></slot>
	<slot name="c"></slot>
	</div>
</template>

<style scoped>
	.blue{
		width:200px;
		height:200px;
		border-radius:100px;
		background:linear-gradient(blue, purple);
	}
</style>
