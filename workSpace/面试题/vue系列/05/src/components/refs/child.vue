<template>
  <div>
    <input type="text" v-model="msg">
    <button @click="handle">添加</button>
  </div>
</template>


<script setup>
import { ref } from 'vue';
const val = ref('')
const handle = () => {

}


defineExpose({ val })

</script>

<style lang="css" scoped></style>