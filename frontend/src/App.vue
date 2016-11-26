<template>
  <div id="app">
    <dropzone></dropzone>
  </div>
</template>

<script>
import Dropzone from './components/Dropzone'

export default {
  name: 'app',
  components: {
    Dropzone
  }
}
</script>

<style lang="stylus">
body
  font-family 'Open Sans', sans-serif
</style>
