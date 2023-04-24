<template>
   <p>child--{{ count }} </p>
   <button @click="handle">+</button>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(0)
const emit = defineEmits(['add']) // 创建一个add 事件

const handle = () => {
    count.value++
    emit('add', count.value)  // 将 emit 事件发散出去，且携带上参数 
}
</script>

<style  scoped>

</style>