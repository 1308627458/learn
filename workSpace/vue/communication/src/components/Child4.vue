<template>
  <div class="input-group">
    <input type="text" v-model="value" >
    <button @click="handle">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('')
const list = ref(['html'])

const handle = () => {
  list.value.push(value.value)
}

defineExpose({ list })

</script>

<style scoped>
.input-group{
  width: 100%;
  display: flex;
}
</style>