<template>
	<div id="app">
		<div>
			{{msg}}, nice to meet Vue.
		</div>

		<a href="/">
			<img src="./assets/logo.png" width="50" height="50">
		</a>

		<div>{{tripleCounter}}</div>

		<router-view></router-view>

		<button @click="increment()">+</button>

	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'Hello World'
		}
	},
	computed: {
		tripleCounter() {
			return this.$store.getters.tripleCounter;
		}
	},
	methods: {
		increment () {
			this.$store.dispatch('increment', 2)
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
