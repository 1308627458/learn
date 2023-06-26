<script setup>
//1. 导入 use 打头的方法
import { useCounterStore } from '@/stores/counter'
//2. 执行方法得到store 实例对象
const counterStore = useCounterStore()
console.log(useCounterStore);
</script>

<template>
  <button @click="counterStore.increment">{{ counterStore.count }}</button>
  {{ counterStore.doubleCount }}
</template>

<style scoped></style>
