<template>
  <van-nav-bar :title="props.title" left-arrow  @click-left="goBack">  <!--动态添加 -->
    <template #right>
      <van-icon name="ellipsis" size="24" />
    </template>
  </van-nav-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const router = useRouter()
const goBack = () => {
  router.go(-1)
}

</script>

<style lang="less" scoped>

</style>