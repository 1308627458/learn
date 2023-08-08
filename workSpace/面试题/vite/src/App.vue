<template>
  <h1>hello wn</h1>
  <h2>
    <span>count is {{  count }}</span>
    <button @click="count++">点我</button>
  </h2>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(1)
</script>

<style lang="css" scoped>
h1 {
  color: red
}
</style>