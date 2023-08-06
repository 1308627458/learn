<template>
  <div>
    <h1 v-show="false">hello</h1>
    <Parent/>
  </div>


</template>

<script setup>
import { reactive } from 'vue';
import Parent from './components/mitt/parent.vue'

const state = reactive({
  list: [1, 2, 3]
})
</script>

<style lang="css" scoped>

</style>