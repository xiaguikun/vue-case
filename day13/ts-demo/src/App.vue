<template>
  <div id="app">
    <h2>vue + ts</h2>
    <class-component p1="来自父组件的prop"/>
    <extend-component />
    <function-component p2="来自爸爸的爱"/>
  </div>
</template>

<script lang="ts">
// 引入类组件
import ClassComponent from './components/ClassComponent.vue';
// 引入扩展组件
import ExtendComponent from './components/ExtendComponent.vue';
// 引入函数式组件
import FunctionComponent from './components/FunctionComponent.vue';
// 修饰器
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ClassComponent,
    ExtendComponent,
    FunctionComponent
  }
})
export default class App extends Vue {
  show(): void {
    console.log(555)
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
  margin-top: 60px;
}
</style>
