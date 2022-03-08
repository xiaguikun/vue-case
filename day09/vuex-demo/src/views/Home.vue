<template>
  <div class="home">
    <!-- {{ count }} -->
    <!-- <button @click="handleClick">add</button> -->
    {{ count }}
    {{ reverse }}
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$store.state.count 获取vuex里面的状态
    console.log(this.$store.state.count)
  },

  computed: {
    count() {
      return this.$store.state.count
    },
    // reverse() {
    //   return this.$store.state.msg.split('').reverse().join('')
    // }
    reverse() {
      return this.$store.getters.reverseMsg
    }
  },
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   handleClick() {
  //     this.count++
  //   }
  // },
}
</script>
