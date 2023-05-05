<template>
  <div class="container">
    <div class="nav">
      <div class="time">7:41</div>
      <div class="city">切换城市</div>
    </div>

    <div class="city-info">
      <p class="city">{{ today.city }}</p>
      <p class="weather">{{ today.weather }}</p>
      <h2 class="temp">
        <em>{{ today.temperature }}</em>℃
      </h2>
      <div class="detail">
        <span>风力: {{ today.windPower }}</span> |
        <span>风向: {{ today.windDirection }}</span> |
        <span>空气湿度: {{ today.humidity }}%</span>
      </div>
    </div>

    <div class="future">
      <div class="group">
        明天:
        <span class="tm">白天:20℃大雨东南风≤3 </span>
        <span class="tm">夜间:10℃大雨东南风≤5</span>
      </div>
      <div class="group">
        后天:
        <span class="tm">白天:23℃大雨东南风≤5 </span>
        <span class="tm">夜间:11℃大雨东南风≤2</span>
      </div>
    </div>

    <div class="echart-container" ref="echartContainer"></div>

  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue';
import * as echarts from 'echarts';

export default {
  setup() {
    const echartContainer = ref(null)
    const state = reactive({
      today: {},
      futureData: []
    })
    const tempArr = []

    watchEffect(() => {
      // 1.获取定位
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            // console.log(result);
            getWeather(result.city)
          }
        })
      })

    })
    

    const initEchart = () => {
      console.log(tempArr);
      const myChart = echarts.init(echartContainer.value);
      let option = {
        xAxis: {
          type: 'category',
          data: ['今天', '明天', '后天', '大后天'],
          lineStyle: {
            color: '#fff'
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            data: tempArr,
            type: 'line'
          }
        ]
      };
      myChart.setOption(option);
    }

    const getWeather = (cityName) => {
      AMap.plugin('AMap.Weather', function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          // console.log(err, data);
          state.today = data
        });

        // 未来的天气
        weather.getForecast(cityName, function (err, data) {
          console.log(err, data);
          state.futureData = data.forecasts

          data.forecasts.forEach(item => {
            tempArr.push(item.dayTemp)
          })

          initEchart()

        })
      });
    }

    

    return {
      ...toRefs(state),
      echartContainer
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  background: #000;
  opacity: 0.7;
  color: #fff;

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .city-info {
    text-align: center;

    .temp {
      font-size: 26px;

      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }

  .future {
    padding: 0 10px;
    margin-top: 30px;

    .group {
      height: 44px;
      line-height: 44px;
      background: rgba(255, 255, 255, 0.3);
      margin-bottom: 10px;
      padding: 0 10px;
      font-size: 13px;
      border-radius: 5px;
    }
  }

  .echart-container {
    width: 100%;
    height: 50vh;
  }
}
</style>