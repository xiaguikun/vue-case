<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ path: '/index'}" tag="a" replace>首页</router-link> |
      <router-link :to="{ path: '/classify'}" tag="a" replace>详情页</router-link> |
      <router-link :to="{ path: '/cart'}" tag="a" replace>购物车</router-link> |
      <router-link :to="{ path: '/mine'}" tag="a" replace>我的</router-link> |
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-exact-active {
  color: green;
  font-weight: 900;
}
</style>
