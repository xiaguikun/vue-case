<template>
  <div>
    <input type="text" v-model="stu.id">
    <input type="text" v-model="stu.name">
    <button @click="add">add</button>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.id }} - {{ item.name }} - 
        <button @click="del(item.id)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      stu: {
        id: '',
        name: ''
      },
      list: [
        { id: 1, name: 'shanqiang' },
        { id: 2, name: 'gaotian' },
        { id: 3, name: 'zhengyang' }
      ]
    }
  },
  methods: {
    del(id) {
      this.list = this.list.filter((item, index) => item.id !== id)
    },
    add() {
      // { id: 4, name: 'wansheng' }
      let obj = Object.assign({}, this.stu)
      this.list.push(obj)
      this.stu.id = ''
      this.stu.name = ''
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
