<template>
  <div>
    {{ count }}
    <button @click="add">+</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      msg: 'aaa'
    }
  },
  // setup函数是组合API的入口函数
  // 可以在setup里面去定义变量，函数等等，可以去改变
  setup() {
    // setup函数是在beforeCrete和created之间执行的
    // 所以在setup的时候，还拿不到data和methods

    // console.log(this)
    // console.log(this.msg)
    // Vue为了避免我们在这里错误地使用data和methods，直接在setup里面将this修改成了undefined

    // 在setup里面不能使用异步函数



    // 定义了一个count的变量，初始值是0
    // vue能自动追踪它的变化，并且渲染在页面上
    let count = ref(0)  // => { value: 0 }

    // 如果在组合API里面想定义方法，不必写在methods里面去了，直接定义
    function add() {
      // console.log(count)
      count.value++
    }

    // 如果想在外部使用setup定义的变量或者方法，必须要return
    return { count, add }
  }
}
</script>