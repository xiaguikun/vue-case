<template>
  <div>
    bbbbb
    {{ count }}
  </div>
</template>

<script>
let timer
export default {
  data() {
    return {
      count: 0
    }
  },
  created() {
    timer = setInterval(() => {
      console.log(123)
    }, 1000)
    this.$Bus.on('add2', this.change);
  },
  beforeDestroy() {
    this.$Bus.off('add2', this.change);
    // 定时器，事件监听，websocket监听
    clearInterval(timer)
  },
  methods: {
    change(num) {
      // console.log(num)
      this.count = num
    }
  },
}
</script>