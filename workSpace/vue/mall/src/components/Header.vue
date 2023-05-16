<template>
  <van-nav-bar :title="props.title" left-arrow>  <!--动态添加 -->
    <template #right>
      <van-icon name="ellipsis" size="24" />
    </template>
  </van-nav-bar>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>

</style>