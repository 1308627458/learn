<template>
<div>
  <input type="text" v-model="value">
 <button>添加</button>
</div>

<child :val="value"/>
</template>

<script setup>
import { ref } from 'vue';
import child from './child.vue'


const value = ref('hello')
</script>

<style lang="css" scoped>

</style>