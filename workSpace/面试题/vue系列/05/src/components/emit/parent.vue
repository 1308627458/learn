<template>
  <h2>{{ title }}</h2>
  <child @add="handleAdd" />
</template>
  
<script setup>
import child from './child.vue'
import { ref } from 'vue'
const title = ref('hello world')

const handleAdd = (msg) => {
  title.value = msg
}
</script>
  
<style lang="css" scoped></style>