<template>
	<div>
		<li>{{commentpost}}</li>
		<slot></slot>
	</div>		
</template>

<script>
export default {
	props: ['commentpost']
}
</script>
