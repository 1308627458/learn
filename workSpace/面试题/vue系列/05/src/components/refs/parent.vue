<template>
  <h2>{{ childRef?.val }}</h2>
  <child ref="childRef"/>
</template>
  
<script setup>
import child from './child.vue'
import { onMounted, ref } from 'vue'

const title = ref('hello world');
const childRef = ref(null)


</script>
  
<style lang="css" scoped></style>