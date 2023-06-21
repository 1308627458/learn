<template>
  <div class="page">
    <router-view></router-view>
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';

</script>

<style lang="less" scoped>
.page{
  height: 100%;
  padding-bottom: 50px;
}
</style>