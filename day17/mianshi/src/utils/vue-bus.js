const install = function(Vue) {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args)
      },
      on(event, cb) {
        this.$on(event, cb)
      },
      off(event, cb) {
        this.$off(event, cb)
      }
    }
  })
  Vue.prototype.$Bus = Bus
}

export default install;