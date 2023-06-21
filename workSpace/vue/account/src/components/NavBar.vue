<template>
  <van-tabbar v-model="active" route active-color="#39be77">
    <van-tabbar-item icon="notes-o" to="/page/home">明细</van-tabbar-item>
    <van-tabbar-item icon="bar-chart-o" to="/page/data">统计</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/page/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0)
</script>

<style lang="less" scoped>

</style>