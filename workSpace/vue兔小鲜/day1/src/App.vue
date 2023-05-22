<template>
  <div>
    <button @click="add">{{ state.count }}</button>
    <button @click="change">{{ state.name }}</button>
  </div>
  <Father :count = "state.count" msg = "this is app msg"></Father>
</template>

<script setup>

import { ref, computed, watch, reactive } from 'vue';
import Father from './components/Father.vue';
const state = reactive({
  count: 0,
  name: '小黄'
})


const add = () => {
  state.count++
}
const change = () => {
  state.name = '邹宇'
}

watch(() => state.count, () => {
  console.log('数据变化了');
}, {
  immediate: true
})
</script>

<style></style>
