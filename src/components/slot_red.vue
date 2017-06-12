<template>
	<div>
		<div class="red"></div>
		<slot name="a"></slot>
		<slot name="b"></slot>
	</div>
</template>

<style scoped>
	.red {
		width:200px;
		height:200px;
		border-radius:100px;
		background:linear-gradient(red, orangered);
	}
</style>
