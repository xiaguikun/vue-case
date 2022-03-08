<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img :src="url" alt="">
  </div>
</template>

<script>
// 在js里面，不能使用相对路径
import url from '../assets/logo.png'
export default {
  data() {
    return {
      url: url
    }
  }
}
</script>

<style>
  .about {
    height: 3000px;
  }
</style>
