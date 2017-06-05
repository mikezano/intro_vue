<template>
  <div>
    {{text}}
  </div>
</template>

<script>

export default {
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
