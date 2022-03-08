<template>
  <div class="about">
    {{ count }}
    <p>{{ name }}</p>
    <p>{{ reverseMsg2 }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"

export default {
  data() {
    return {
      msg: '三分钟',
      number: 20
    }
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   },
  //   name() {
  //     return this.$store.state.name
  //   }
  // },
  computed: {
    age() {
      return this.msg
    },
    ...mapState({
      count: state => state.count,
      // name: state => state.name
      name: 'name',
      // name(state) {
      //   return state.name + this.msg
      // }
      // reverseMsg: state => state.msg.split('').reverse().join('')
    }),
    // ...mapGetters([
    //   'reverseMsg',
    //   'doubleCount'
    // ])
    ...mapGetters({
      reverseMsg2: 'reverseMsg',
      doubleCount: 'doubleCount'
    })
  },
  // computed: mapState({
  //   count: state => state.count,
  //   // name: state => state.name
  //   // name: 'name'
  //   name(state) {
  //     return state.name + this.msg
  //   }
  // }),
  methods: {
    add () {
      // this.$store.commit('incrementM', {
      //   num: 5
      // })
      // 对象风格的提交方式
      // this.$store.commit({
      //   type: 'incrementM',
      //   num: 5
      // })
      // this.incrementM({
      //   num: 5
      // })
      // this.$store.dispatch('incrementA', {
      //   num: this.number
      // })
      this.incrementA({
        num: this.number
      })
    },
    ...mapMutations([
      'incrementM'
    ]),
    ...mapActions([
      'incrementA'
    ])
  },
}
</script>