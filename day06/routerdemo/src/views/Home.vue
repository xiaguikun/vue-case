<template>
  <div class="home">
    <!-- <router-link to="/hot">热映</router-link> |
    <router-link to="/cinema">影院</router-link> |
    <router-link to="/wait">待映</router-link> -->
    <p>
      <span @click="jump('/hot')">热映</span>
      <span @click="jump('/cinema')">影院</span>
      <span @click="jump('/wait')">待映</span>
      <span @click="back">后退</span> |
    </p>
    <!-- <router-link :to="{path: '/detail/456'}">详情页</router-link> -->
    <!-- <router-link :to="{name: 'detail', params: {id: 456}}">详情页</router-link> -->
    <span @click="toDetail">详情页</span>
    <div class="wrap">
      <router-view></router-view>
      <!-- <router-view name="b"></router-view> -->
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      jump(url) {
        console.log(111)
        // this.$router.push(url)
        this.$router.push({
          path: url
        })
      },
      back() {
        this.$router.go(-1)
      },
      toDetail() {
        // this.$router.push({name: 'detail', params: {id: 456}})
        this.$router.push('/detail/456/678')
      }
    }
  }
</script>

<style>
  .home {
    width: 100%;
    height: 300px;
    border: 1px solid #000;
    padding: 20px;
  }

  .home .wrap {
    border: 1px solid #000;
  }
</style>
