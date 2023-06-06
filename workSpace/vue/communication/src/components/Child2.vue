<template>
  <div class="input-group">
    <input type="text" v-model="value" >
    <button @click="handle">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('')
const emits = defineEmits(['add']) //发布事件
const handle = () => {
  emits('add', value.value);
}
</script>

<style scoped>
.input-group{
  width: 100%;
  display: flex;
}
</style>