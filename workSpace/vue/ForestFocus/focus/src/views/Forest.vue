<template>
  <div class="ForestWrapper">
    <div class="ForestHeader">
      <span class="iconfont icon-guanbi" @click="backToHome"></span>
      <div class="ForestOverview">
        <span class="text">总览</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      <span class="iconfont icon-fenxiang"></span>
    </div>

    <div class="ForestBody">
      <div class="DWMY">
        <p v-for="item in dateArray" :key="item.id" :class="{'selected': item.id === ActiveId}" @click="chooseDate(item)">{{ item.date }}</p>
     
      </div>

      <div class="Date">
        <span class="iconfont icon-zuojiantou" @click="beforeTime"></span>
        <span class="date">{{ state.Time }}</span>
        <span class="iconfont icon-youjiantou" @click="afterTime"></span>
      </div>
    </div>


  </div>

  <Garden></Garden>

  <div class="echart-container" ref="echartContainer">
      123
  </div>
</template>

<script setup>

import Garden from '../components/Garden.vue'
import router from '../router';
import * as echarts from 'echarts';
import { ref, reactive, watchEffect} from 'vue'

const dateArray = [
  {date:'日', id: 1},
  {date:'周', id: 2},
  {date:'月', id: 3},
  {date:'年', id: 4},
]
const ActiveId = ref(1)
const backToHome = () => {
  console.log(123);
  router.push('/Home')
}


const currentDate = new Date();
const initialDate = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日`

const state = reactive( {
  year:'',
  month:'',
  day: '',
  Time:initialDate,

})



state.year = currentDate.getFullYear();
// 获取当前月份（注意月份从0开始，所以要加1）
state.month = currentDate.getMonth() + 1;
state.day = currentDate.getDate();

console.log(initialDate);



const chooseDate = (res) => {
  ActiveId.value = res.id
  if(res.id == 1){
    state.Time = `${state.year}年${state.month}月${state.day}日`
  } 
  if(res.id == 2) {
    state.Time = `${state.year}年${state.month}月${state.day-3}日至${state.day+3}日`
  }
  if(res.id == 3) {
    state.Time = `${state.year}年${state.month}月`
  }
  if(res.id == 4) {
    state.Time = `${state.year}年`
  }
}


const beforeTime = () => {
  state.day = state.day - 1
  if (state.day < 1) {
    state.day = 30
    state.month = state.month - 1
    console.log(state.month, state.day);
  }
  console.log(state.day);

  // state.month = state.month - 1
  // console.log(state.month);
  
}


// const echartContainer = ref(null)
// const initEchart = ()  => {
//   const myChart = echarts.init(echartContainer)
//   let option = {
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'shadow'
//     }
//   },
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   xAxis: [
//     {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//       axisTick: {
//         alignWithLabel: true
//       }
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value'
//     }
//   ],
//   series: [
//     {
//       name: 'Direct',
//       type: 'bar',
//       barWidth: '60%',
//       data: [10, 52, 200, 334, 390, 330, 220]
//     }
//   ]
// };

// option && myChart.setOption(option);
// }

// initEchart()


</script>

<style lang="less" scoped>
.ForestWrapper {
  
  color: white;


  .ForestHeader {
    background: #059f92;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .iconfont {
      font-size: 0.6rem;
    }

    .icon-guanbi {
      margin-left: 0.2rem;
    }

    .icon-fenxiang {
      font-size: 0.5rem;
      margin-right: 0.2rem;
    }

    .ForestOverview {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0.6rem;
      width: 2.5rem;
      font-size: 0.4rem;
      font-weight: 550;
      background: rgba(98, 94, 94, 0.4);
      border-radius: 15px;
    }
  }

  .ForestBody {
    background: #175f41;
    height: 45vh;
    overflow: hidden;
    color: white;
    .DWMY {
    display: flex;
    justify-content: center;
    border-radius: 5px; 
    margin-top: 0.4rem;
    
    p {
      text-align: center;
      width: 2.3rem;
      height: 0.6rem;
      display: inline;
      font-size: 0.39rem;
      background: rgba(1, 14, 4, 0.2);
      line-height: 0.6rem;
      
    }
  }

  .Date{
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-zuojiantou{
      font-size: 0.6rem;
      margin-left: 0.15rem;
    }
    .icon-youjiantou{
      font-size: 0.6rem;
      font-weight: 600;
      margin-right: 0.15rem;
    }
    .date{
      font-size: 0.38rem
    }
  }
  }
}
.echart-container{
  width: 100%;
  height: 30vh;
}
.selected{
  background: white !important;
  color: black;
  border-radius: 5px;
}
</style>