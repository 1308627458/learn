<template>
  <hr>
  <h2>{{ count }} --- {{ doubleCount }}</h2>
  <button @click="add"> 点我</button>
</template>

<script setup>

import useCount from './hooks';

const { count, add, doubleCount } = useCount(5)



// import { ref } from 'vue';

// const count = ref(0)

// const add = () => {
//   count.value++
// }
</script>

<style lang="scss" scoped>

</style>