<template>
	<div id="app">
		<div>
			{{msg}}, nice to meet Vue.
		</div>

		<a href="/">
			<img src="./assets/logo.png" width="50" height="50">
		</a>

		<router-view></router-view>

	</div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	data () {
		return {
			msg: 'Hello World'
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
