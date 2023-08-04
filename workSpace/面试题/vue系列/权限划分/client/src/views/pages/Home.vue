<template>
  <h1>homepage</h1>
  <el-button type="danger" v-noLevel>通过审批</el-button>
</template>

<script setup>
import { onMounted } from 'vue';
import { home } from '../../api/user'


onMounted(() => {
  home().then(res => {
    console.log(res);
  })
})
</script>

<style lang="css" scoped></style>