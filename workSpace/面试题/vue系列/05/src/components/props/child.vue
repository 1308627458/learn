<template>
  <h2>{{ val }}</h2>
</template>

<script setup>
const props = defineProps({
  val: {
    type: String,
    required: true
  }
})
</script>

<style lang="css" scoped>

</style>