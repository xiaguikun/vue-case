<template>
  <div class="hello">
    <!-- {{ reverseMsg }} -->
    来自helloworld的  {{ msg }} {{ count }}
    <!-- <p>{{ count }}</p> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapState } = createNamespacedHelpers('a')
const { mapState: mapState2 } = createNamespacedHelpers('b')
export default {
  computed: {
    // ...mapGetters({
    //   reverseMsg: 'reverseMsg'
    // }),
    ...mapState({
      msg: state => state.msg
    }),
    ...mapState2({
      count: state => state.count
    })
    // msg() {
    //   return this.$store.state.a.msg
    // },
    // reverseMsg() {
    //   return this.$store.getters.reverseMsg
    // },
    // count() {
    //   return this.$store.state.b.count
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
