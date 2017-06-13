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

		<button @click="increment(2)">+</button>
		<button @click="decrement()">-</button>
		<button @click="asyncDecrement()">Async</button>

	</div>
</template>

<script>
import {mapMutations} from 'vuex'

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
		...mapMutations(['decrement','increment']),
		asyncDecrement () {
			this.$store.dispatch('asyncDecrement', {by: 1, duration: 3000})
				.then(() =>{
					alert('decrement!');
				})
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
