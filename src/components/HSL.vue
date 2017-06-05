<template>
  <div :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" @mousemove="xCoordinate">
    <p><button @click="increment">+</button> {{ counter }} <button @click="decrement">-</button></p>
    <p>Pixels across: {{ x }}</p>
    <sample-component />
</div>
</template>

<script>
import SampleComponent from './SampleComponent.vue'

export default {
  name: 'hello',
  data () {
    return {
      counter: 0,
      x: 0
    }
  },
  methods: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    },
    xCoordinate (e) {
      this.x = e.clientX
    }
  },
  components: {
    SampleComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
