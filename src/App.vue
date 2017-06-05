<template>
  <div id="app">
    <div>
    {{msg}}, nice to meet Vue.

    <ul>
      <li v-for="item in items">
        {{item}}
      </li>
    </ul>

    </div>
    <img src="./assets/logo.png">
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World'
      // items: ['a', 'b', 'c', 'd', 'e']
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
  margin-top: 60px;
}
</style>
