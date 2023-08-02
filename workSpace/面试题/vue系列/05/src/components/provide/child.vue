<template>
  <h2>{{ title }}</h2>
</template>


<script setup>
import { inject, ref } from 'vue';
const title = inject('title')



</script>

<style lang="css" scoped></style>