<template>
  <p>parent -- {{ num }}</p>
   <Child @add="handleAdd"/>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue';
const num = ref(0)

const handleAdd = (e) => {
   num.value = e
}
</script>

<style  scoped>

</style>