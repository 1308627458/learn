<template>
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae" >
  <van-swipe-item v-for="(item, index) in props.list" :key="index">
    <img :src="item.carouselUrl" alt="">
  </van-swipe-item>
</van-swipe>
</template>

<script setup>

const props = defineProps({
  list: Array
})


</script>

<style lang="less" scoped>
 .my-swipe {
  img{
    width: 100%;
  }
 }
  
</style>