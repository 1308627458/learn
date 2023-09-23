<template>
  <div>
    hello world
  </div>
  <div>
    <h2>{{ state.count }}</h2>
    <button @click="add">点我累加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const state = ref({
  count: 0,
})

const add  = () => {
  state.value.count++
}
</script>

<style lang="scss" scoped>

</style>