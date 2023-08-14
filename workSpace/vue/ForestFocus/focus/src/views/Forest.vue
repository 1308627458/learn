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
        <p v-for="item in dateArray" :key="item.id" :class="{ 'selected': item.id === ActiveId }"
          @click="chooseDate(item)">
          {{ item.date }}</p>

      </div>

      <div class="Date">
        <span class="iconfont icon-zuojiantou" @click="beforeTime"></span>
        <span class="date">{{ Time }}</span>
        <span v-show="flag" class="iconfont icon-youjiantou" @click="afterTime"></span>
      </div>
    </div>

    <div class="ForestFoot">
    </div>
  </div>

  <Garden></Garden>
  <div class="FocusRecord">
    <h1 class="text">专注时间统计</h1>
    <p>累计专注时长:<span> {{ state.totalTime }} </span>分钟</p>
    <div class="echart-container" ref="echartContainer">

    </div>
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
import { watch } from 'vue';
import axios from '../api'
import { toRaw } from 'vue';


dayjs.locale('zh-cn'); // 设置语言为中文
dayjs.extend(isoWeek);
const Xdata1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
const Xdata2 = ['周日', '周一', '周二', '周三', '周四', '周五', '周六',]
const Xdata3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
const Xdata4 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const state = reactive({
  year: '',
  month: '',
  firstDay: '',
  lastDay: '',
  day: '',
  echartsXdata: Xdata1,
  echartsYdata: '',
  echartsText: '',
  totalTime: '',
  min: null,
  max: null,
  flag:'',
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

// 给week传递参数，动态获得日期当周的首天和最后一天
const weekArgument = computed(() => {
  return `${state.year}-${state.month}-${state.day}`
})


// const weekNumber = currentDate.isoWeek(); // 第几周
// const firstDayOfWeek = currentDate.startOf('isoWeek');
// const lastDayOfWeek = currentDate.endOf('isoWeek');

watch(() => {
  const weekNumber = dayjs(weekArgument.value).isoWeek(); // 第几周
  const firstDayOfWeek = dayjs(weekArgument.value).startOf('isoWeek');
  const lastDayOfWeek = dayjs(weekArgument.value).endOf('isoWeek');

  state.firstDay = firstDayOfWeek.format('DD') - 1
  state.lastDay = lastDayOfWeek.format('DD') - 1
})

// console.log(state.firstDay, state.lastDay);

const Time = computed(() => {
  if (ActiveId.value == 1) {
    return `${state.year}年${state.month}月${state.day}日`
  }
  if (ActiveId.value == 2) {
    let arg
    state.firstDay < state.lastDay ? arg = `${state.year}年${state.month}月${state.firstDay}日至${state.lastDay}日` : arg = `${state.year}年${state.month}月${state.firstDay}日至${state.month + 1}月${state.lastDay}日`
    console.log(state.firstDay, state.lastDay);
    return arg

  }
  if (ActiveId.value == 3) {
    return `${state.year}年${state.month}月`
  }
  if (ActiveId.value == 4) {
    return `${state.year}年`
  }
})


const chooseDate = async (res) => {
  ActiveId.value = res.id

  dataAxios()

}

// 更具日期请求数据
const dataAxios = async () => {
  if (ActiveId.value == 1) {
    state.echartsXdata = Xdata1
    const { data } = await axios.post('/record/dayData', {
      day: state.day,
      month: state.month,
      year: state.year
    })

    if (data.length == 0) {
      // 设置图表正中心文字内容
      state.echartsText = '无数据'
      state.min = 0
      state.max = 25
    } else {
      state.echartsText = ''
      state.min = null
      state.max = null
      // 得到echarts图表的Y轴数据
    }

    state.echartsYdata = data.map((item) => {
      return item.time
    })
    // 计算累计时长 
    state.totalTime = [...state.echartsYdata].reduce((acc, cur) => {
      return +acc + parseInt(cur)
    }, 0)

    // console.log(state.totalTime);

  }

  if (ActiveId.value == 2) {
    state.echartsXdata = Xdata2

    if (data.length == 0) {
      state.echartsText = '无数据'
      state.min = 0
      state.max = 25
    } else {
      state.echartsText = ''
      state.min = null
      state.max = null

    }
    state.totalTime = [...state.echartsYdata].reduce((acc, cur) => {
      return +acc + parseInt(cur)
    }, 0)
  }

  if (ActiveId.value == 3) {
    state.echartsXdata = Xdata3
    const { data } = await axios.post('/record/monthData', {
      month: state.month,
      year: state.year
    })

    if (data.length == 0) {
      state.echartsText = '无数据'
      state.min = 0
      state.max = 25
    } else {
      state.echartsText = ''
      state.min = null
      state.max = null

    }
    state.echartsYdata = data.map((item) => {
      return item.time
    })
    state.totalTime = [...state.echartsYdata].reduce((acc, cur) => {
      return +acc + parseInt(cur)
    }, 0)

  }

  if (ActiveId.value == 4) {
    state.echartsXdata = Xdata4
    const { data } = await axios.post('/record/yearData', {
      year: state.year
    })

    if (data.length == 0) {
      state.echartsText = '无数据'
      state.min = 0
      state.max = 25
    } else {
      state.echartsText = ''
      state.min = null
      state.max = null

    }
    state.echartsYdata = data.map((item) => {
      return item.time
    })
    state.totalTime = [...state.echartsYdata].reduce((acc, cur) => {
      return +acc + parseInt(cur)
    }, 0)

    // console.log([...state.echartsYdata])

  }
}
// 左箭头
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
    if (state.lastDay < 1) {
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

  dataAxios()

}

// 右箭头
const afterTime = () => {
  if (ActiveId.value == 1) {
    state.day = state.day + 1
    if (state.day > new Date(state.year, state.month, 0).getDate()) {
      state.month = state.month + 1
      state.day = 1
    }
    // console.log(state.day);
  }
  if (ActiveId.value == 2) {
    state.firstDay = state.firstDay + 7
    state.lastDay = state.lastDay + 7
    if (state.firstDay < new Date(state.year, state.month, 0).getDate() && state.lastDay > new Date(state.year, state.month, 0).getDate()) {
      state.lastDay = state.lastDay - new Date(state.year, state.month, 0).getDate()
    }
    if (state.firstDay > new Date(state.year, state.month, 0).getDate()) {
      console.log(state.firstDay);
      state.firstDay = state.firstDay - new Date(state.year, state.month, 0).getDate()
      console.log(state.firstDay, new Date(state.year, state.month, 0).getDate());
      state.month = state.month + 1
    }
  }
  if (ActiveId.value == 3) {
    state.month = state.month + 1
    if (state.month > 12) {
      state.year = state.year + 1
      state.month = 1
    }
  }
  if (ActiveId.value == 4) {
    state.year = state.year + 1
  }

  dataAxios()

}

const echartContainer = ref(null) // 获取dom结构


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
      left: '4%',
      right: '4%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: state.echartsXdata,
        axisTick: {
          alignWithLabel: true,
          show: false,
        },
        axisLine: {
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: state.min,
        max: state.max,
      }
    ],
    series: [
      {
        name: '时长',
        type: 'bar',
        barWidth: '60%',
        data: toRaw(state.echartsYdata),
        itemStyle: {
          color: '#059f92',
          barBorderRadius: 1.5,
        }
      }
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: '55%',
        style: {
          text: state.echartsText,
          fill: '#999',
          fontSize: 16,
          fontWeight: 'bold'
        }
      }
    ],
  };

  option && myChart.setOption(option);
}


nextTick(async () => {

  watch(() => {
    initEchart()
  })

  dataAxios()
})





</script>

<style lang="less" scoped>
.ForestWrapper {

  color: white;


  .ForestHeader {
    background: #0f8077;
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
    height: 48vh;
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
      justify-content: center;
      align-items: center;
      

      .icon-zuojiantou {
        position: fixed;
        font-size: 0.6rem;
        left: 2%;
      }

      .icon-youjiantou {
        position: fixed;
        font-size: 0.6rem;
        font-weight: 600;
        right: 2%;
      }

      .date {
        font-size: 0.38rem;
        margin: 0 auto;
      }
    }
  }

  .ForestFoot {
    height: 45.3vh;
    background: #eee;
  }
}

.FocusRecord {
  width: 95%;
  height: 40vh;
  background: #fff;
  border-radius: 5px;
  position: fixed;
  top: 48%;
  left: 2.5%;

  h1 {
    font-size: 0.4rem;
    font-weight: 800;
    margin-left: 0.4rem;
    margin-top: 0.5rem;
  }

  .text::after {
    content: "";
    position: absolute;
    left: 3%;
    top: 17%;
    width: 94%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    /* 设置半透明颜色 */
  }

  span {
    color: #059f92;
    font-weight: bold;
    margin: 0 0.15rem 0 0.2rem;
  }

  p {
    position: absolute;
    font-size: 0.35rem;
    margin-top: 0.7rem;
    margin-left: 0.4rem;
  }

  .echart-container {
    width: 98%;
    height: 35vh;
  }
}


.selected {
  background: white !important;
  color: black;
  border-radius: 5px;
}
</style>