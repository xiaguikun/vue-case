<template>
  <div>
    来自hello的 
    <button @click="add">add</button>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  // computed: mapState({
  //   // msg: 'msg'
  //   msg: state => state.msg
  // }),
  methods: {
    add() {
      this.$store.dispatch('b/asyncAdd', {
        num: 6
      })
    }
  },
}
</script>