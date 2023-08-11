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
        <p v-for="item in dateArray" :key="item.id" :class="{ 'selected': item.id === ActiveId }" @click="chooseDate(item)">
          {{ item.date }}</p>

      </div>

      <div class="Date">
        <span class="iconfont icon-zuojiantou" @click="beforeTime"></span>
        <span class="date">{{ Time }}</span>
        <span class="iconfont icon-youjiantou" @click="afterTime"></span>
      </div>
    </div>


  </div>

  <Garden></Garden>

  <div class="echart-container" ref="echartContainer">

  </div>
</template>

<script setup>

import { nextTick } from 'vue';
import Garden from '../components/Garden.vue'
import router from '../router';
import * as echarts from 'echarts';
import { ref, reactive } from 'vue'
import { computed } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.locale('zh-cn'); // 设置语言为中文
dayjs.extend(isoWeek);

const state = reactive({
  year: '',
  month: '',
  firstDay: '',
  lastDay: '',
  day: '',
})
const ActiveId = ref(1)

const dateArray = [
  { date: '日', id: 1 },
  { date: '周', id: 2 },
  { date: '月', id: 3 },
  { date: '年', id: 4 },
]


const backToHome = () => {
  console.log(123);
  router.push('/Home')
}


const currentDate = dayjs();
state.year = currentDate.year();
// 获取当前月份（注意月份从0开始，所以要加1）
state.month = currentDate.month() + 1;
state.day = currentDate.date();

const weekArgument = computed(() => {
  return `${state.year}-${state.month}-${state.day}`
})
console.log(weekArgument.value);




// const weekNumber = currentDate.isoWeek(); // 第几周
// const firstDayOfWeek = currentDate.startOf('isoWeek');
// const lastDayOfWeek = currentDate.endOf('isoWeek');

const weekNumber = dayjs(weekArgument.value).isoWeek(); // 第几周
const firstDayOfWeek = dayjs(weekArgument.value).startOf('isoWeek');
const lastDayOfWeek = dayjs(weekArgument.value).endOf('isoWeek');


state.firstDay = firstDayOfWeek.format('DD') - 1
state.lastDay = lastDayOfWeek.format('DD') - 1

console.log(state.firstDay, state.lastDay);



const Time = computed(() => {
  if (ActiveId.value == 1) {
    return `${state.year}年${state.month}月${state.day}日`
  }
  if (ActiveId.value == 2) {
    return `${state.year}年${state.month}月${state.firstDay}日至${state.lastDay}日`
  }
  if (ActiveId.value == 3) {
    return `${state.year}年${state.month}月`
  }
  if (ActiveId.value == 4) {
    return `${state.year}年`
  }
})


const chooseDate = (res) => {
  ActiveId.value = res.id
}


const beforeTime = () => {
  // 当选择的是 日 时，当天数小于1，月份减1，将日期变更为新月份的最后一天从新
  if (ActiveId.value == 1) {
    state.day = state.day - 1
    if (state.day < 1) { 
      state.month = state.month - 1 
      state.day = new Date(state.year, state.month, 0).getDate()  
    }
    // console.log(state.day);
  }
  if (ActiveId.value == 2) {
    // 当选择的是 周 时，本周首天和最后一天减7，首天当天数小于1，月份-1，并计算下月天数，最后一天小于1，计算下月天数
    state.firstDay = state.firstDay - 7
    state.lastDay = state.lastDay - 7
    if (state.firstDay < 1) {
      state.month = state.month - 1
      // console.log(state.firstDay);
      state.firstDay = new Date(state.year, state.month, 0).getDate() + state.firstDay 
    }
    if(state.lastDay < 1){
      state.lastDay = new Date(state.year, state.month, 0).getDate() + state.lastDay 
    }
  }

  if (ActiveId.value == 3) {
    state.month = state.month - 1
    if (state.month < 1) {
      state.year = state.year - 1
      state.month = 12
    }
  }
  if (ActiveId.value == 4) {
    state.year = state.year - 1
  }

  console.log(state.firstDay, state.lastDay);
  console.log(state.day);
  console.log(weekArgument.value);

}


const echartContainer = ref(null)

const initEchart = () => {
  const myChart = echarts.init(echartContainer.value)
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  option && myChart.setOption(option);
}

nextTick(() => {
  initEchart()
})


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

    .Date {
      margin-top: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon-zuojiantou {
        font-size: 0.6rem;
        margin-left: 0.15rem;
      }

      .icon-youjiantou {
        font-size: 0.6rem;
        font-weight: 600;
        margin-right: 0.15rem;
      }

      .date {
        font-size: 0.38rem
      }
    }
  }
}

.echart-container {
  width: 100%;
  height: 30vh;
}

.selected {
  background: white !important;
  color: black;
  border-radius: 5px;
}</style>