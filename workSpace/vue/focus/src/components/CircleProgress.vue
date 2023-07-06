<template>
  <!-- 环形进度条 -->
  <div class="circle" >
      <van-circle 
      v-model:current-rate="currentRate" 
      :rate="rate" 
      :stroke-width="40" 
      stroke-linecap="square" 
      size="240px"
      layer-color="#d0ce79" 
      color="#8cc924" />
  </div>
</template>

<script setup>
import { ref } from 'vue';


// 进度条的值
const rate = ref(0)
const currentRate = ref(0)


//根据鼠标位置，更新进度

const drag = () => {
  rate.value = 50
}
drag()


</script>

<style lang="less" scoped>
.circle {
  margin: 1.2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>