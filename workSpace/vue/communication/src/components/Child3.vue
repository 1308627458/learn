<template>
  <div class="input-group">
    <input type="text" v-model="value" >
    <button @click="handle">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  list:Array
})
const value = ref('')
const emits = defineEmits(['updata:list']) //发布事件
const handle = () => {
  const arr = props.list
  arr.push(value.value)
  emits('updata:list', arr)
}
</script>

<style scoped>
.input-group{
  width: 100%;
  display: flex;
}
</style>