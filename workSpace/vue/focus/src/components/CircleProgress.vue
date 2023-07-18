<template>
  <!-- 环形进度条 -->
  <div class="circle">
    <van-circle v-model:current-rate="currentRate" :rate="rate" :stroke-width="40" stroke-linecap="square" size="240px"
      layer-color="#d0ce79" color="#8cc924" />

  <div class="startBtn"   @touchmove="drag" >
  </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';
// import Math from 'math';
// 进度条的值
const rate = ref(0)
const currentRate = ref(0)

const emit = defineEmits(['DragSetTime'])


// 计算角度的函数
const getAngle = (x, y) => {
  const k = (x - 187.5) / (y - 300)
  const radian = Math.atan(k);
  // console.log(k, radian);
  const angle = -(180 / Math.PI) * radian
  // console.log(angle);
  return angle;
}


//根据鼠标位置，更新进度
const drag = (e) => {
  // console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  const angle = getAngle(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
  let finallAngle = 0
  if (e.changedTouches[0].clientX > 187.5) {
    finallAngle = angle > 0 ? angle : 180 + angle
  }
  if (e.changedTouches[0].clientX < 187.5) {
    finallAngle = angle > 0 ? angle + 180 : 360 + angle
  }
  // console.log(finallAngle);
  rate.value = finallAngle / 360 * 100
  // 根据鼠标位置，改变拖拽按钮的位置
  const startBtn = document.querySelector('.startBtn')
  startBtn.style.transform = `rotate(${finallAngle}deg)`
  

  // console.log(finallAngle);
  emit('DragSettingTime', rate.value)
 
}





</script>

<style lang="less" scoped>
.circle {
  margin: 1.2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  .startBtn {
  position: absolute;
  top: -0.3rem;
  left: 45.5%;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50px;
  background: #8cc924;
  z-index: 2;
  // animation: rotation linear infinite 10s;
  // animation: rotate 5s linear infinite;
  transform-origin: center 3.5rem;
}
}



</style>