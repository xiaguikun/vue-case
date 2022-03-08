<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" ref="bbb">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div ref="aaa">hahaha</div>
    <bbbbb></bbbbb>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import bbbbb from './components/b'
// import { a, b } from './assets/a.js'
// import * as xxx from './assets/a.js'

export default {
  name: 'App',
  provide: {
    foo: 'bar'
  },
  data: function() {
    return {
      msg: '111'
    }
  },
  components: {
    HelloWorld,
    bbbbb
  },
  mounted() {
    // console.log(this.$options)
    // console.log(this.$refs.aaa)
    console.log(this.$msg);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
