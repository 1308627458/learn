<template>
  <Child3 v-model:list="list"/>
  
  <ul class="list">
    <li class="list-item" v-for="(item, index) in list" :key="index" >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import Child3 from './components/Child3.vue';

const list = ref(['html'])
const handleAdd = (val) => {
  // console.log(val);
  list.value.push(val)
}
</script>

<style>
#app{
  width: 196px;
}
ul {
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

li {
  list-style: none;
  height: 30px;
  width: 100%;
  padding: 4px 10px;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 2px;
}
</style>