<template>
  <div>
    <h3>扩展组件</h3>
    <p>{{ msg }}</p>
    <button @click="clickMe()">也点我!</button>
    <p>{{ gsm }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      msg: 'extend' as string
    }
  },
  mounted(): void {
   console.log('来自扩展组件的123') 
  },
  methods: {
    clickMe(): void {
      console.log('来自扩展组件的clickme')
    }
  },
  computed: {
    gsm(): string {
      return this.msg.split('').reverse().join('')
    }
  }
})
</script>