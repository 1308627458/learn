<template>
  <h2>{{ title }}</h2>
</template>


<script setup>

import {  ref,getCurrentInstance } from 'vue';

const title = ref('hello')

const app = getCurrentInstance()

app.appContext.config.globalProperties.$emitter.on('foo', (e) => {
  console.log(e);
  title.value = e
})


</script>

<style lang="css" scoped></style>