<template>
  <Child4 ref="childRef"/>
  
  <ul class="list">
    <!-- ？ 在子组件渲染完成后拿来用，没有就不拿 -->
    <li class="list-item" v-for="(item, index) in childRef?.list" :key="index" > 
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import Child4 from './components/Child4.vue';

const childRef = ref(null)

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