<template>
  <div>
    这是详情页{{ $route.params.id }}
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params)
  }
}
</script>