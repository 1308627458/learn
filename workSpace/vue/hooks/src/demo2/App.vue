<template>
  <button @click="add">{{ count }} --- {{  doubleCount }}</button>
  <Child/>
</template>

<script setup>

import { computed } from 'vue';
import Child from './Child.vue'
import useCount from './hooks'

const { count, add, doubleCount } = useCount(0)

// const doubleCount = computed(() => {
//   return count.value * 2
// })

// import { ref } from 'vue'

// const count = ref(0)

// const  add = () => {
//   count.value++
// }


</script>

<style lang="css" scoped>

</style>