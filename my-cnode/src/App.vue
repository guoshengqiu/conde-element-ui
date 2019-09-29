<template>
  <div id="app" @scroll="test">
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('scorll', function () {
      console.log('scroll')
    })
  },
  methods: {
    test () {
      console.log('scroll')
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
  margin-top: 0;
}
</style>
