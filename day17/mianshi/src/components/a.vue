<template>
  <div>
    {{ count }}
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 5
    }
  },
  methods: {
    add() {
      this.count++
      this.$Bus.emit('add2', this.count)
    }
  }
}
</script>