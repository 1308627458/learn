<template>

  <van-nav-bar :title="title" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="ellipsis" size="24"/>
    </template>
  </van-nav-bar>

</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})


</script>

<style lang="less" scoped></style>