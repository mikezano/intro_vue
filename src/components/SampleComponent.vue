<template>
  <div>
    <div>
      {{text}}
    </div>
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>

export default {
  props: ['message'],
  name: 'hello',
  data () {
    return {
      text: 'sample component embedded'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
