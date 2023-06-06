
<template>

<div class="input-group">
  <input type="text" v-model="value">
  <button @click="handle">添加</button>
</div>
<Child :list="list"></Child>
</template>

<script setup>
import { ref } from 'vue';
import Child from './components/Child1-1.vue'
const value = ref('')
const list = ref(['html'])
const handle = () => {
  list.value.push(value.value)
}
</script>

<style >
#app{
  width: 196px;
}
.input-group{
  width: 100%;
  display: flex;
}
</style>
