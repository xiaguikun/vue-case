<template>
  <div id="app">
    <p>{{ reverseMsg }}</p>
    <hello-world></hello-world>
    <hello></hello>
    <button @click="change">change</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Hello from './components/Hello'
export default {
  components: {
    HelloWorld,
    Hello
  },
  computed: {
    reverseMsg() {
      return this.$store.getters['a/reverseMsg']
    }
  },
  methods: {
    change() {
      this.$store.commit('a/changeMsg', {
        message: '你好世界'
      })
    //   this.$store.commit({
    //     type: 'changeMsg',
    //     message: '你好世界'
    //   })
    // }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
