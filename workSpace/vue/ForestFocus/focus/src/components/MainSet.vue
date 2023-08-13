<template>
  <div class="main-wrapper">
    <div class="main-header">
      <span>种植设置</span>
    </div>

    <!-- 选择树种 -->
    <div class="main-chooseTrees">
      <span class="title">树种 (最近使用)</span>
      <div class="treesBox">
        <div class="Box-wrapper">
          <div class="item" @click="myChoice(item)" v-for="item in trees" :key="item.id"
            :class="{ 'highlight2': item.id === treeActiveId }"><img :src="item.url" alt=""></div>
        </div>
      </div>
    </div>

    <!-- 选择时间 -->
    <div class="main-chooseTime">
      <span class="title">专注时长</span>
      <div></div>
      <div class="timePicker">

        <van-picker :columns="columns" :allow-html="true" :option-height="55" :show-toolbar="false"
          :visible-option-num="7" @change="choosed">
        </van-picker>
      </div>
    </div>


    <!-- 选择标签 -->
    <div class="main-chooseLabel">
      <span class="title">项目标签</span>
      <div class="lableBox">
        <ul>
          <li class="item" v-for="item in lables" :key="item.id" @click="chooseLabel(item)"
            :class="{ 'highlight': item.id === LabelActiveId }">
            <span class="littleCircle" :style="`background: ${item.color}`"></span>
            <span class="text">{{ item.name }}</span>
          </li>

        </ul>
      </div>
    </div>

    <!-- 底部 -->
    <div class="main-bottomBar">
      <div class="statusBar_wrapper">

        <div class="myTrees">
          <div class="soil"></div>
          <div class="trees"><img :src="treeUrl" alt=""></div>
        </div>


        <div class="status">

          <div class="status_time">
            <span class="iconfont icon-jindu_shalou"></span>
            <span class="time">{{ time }}</span>
          </div>
          <div class="status_lable">
            <span class="littleCircle" :style="`background: ${labelColor}`"></span>
            <span class="text">{{ label }}</span>
          </div>
        </div>

      </div>

      <div class="btn">
        <van-button type="primary" size="small" color="#35d8bf">开始</van-button>
      </div>
    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue';

import { useStore } from 'vuex';

const store = useStore()
// import Trees from '../components/Trees.vue';
const treeUrl = ref('./src/assets/treesPic/songshu.png')
const LabelActiveId = ref(null)
const treeActiveId = ref(null)
// const myTree = ref('')
const time = ref(10)
const label = ref('学习')
const labelColor = ref('')


const columns = [
  { text: '10', value: '10' },
  { text: '15', value: '15' },
  { text: '20', value: '20' },
  { text: '25', value: '25' },
  { text: '30', value: '30' },
  { text: '35', value: '35' },
  { text: '40', value: '40' },
  { text: '45', value: '45' },
  { text: '50', value: '50' },
  { text: '55', value: '55' },
  { text: '60', value: '60' },
  { text: '65', value: '65' },
  { text: '70', value: '70' },
  { text: '75', value: '75' },
  { text: '80', value: '80' },
  { text: '85', value: '85' },
  { text: '90', value: '90' },
  { text: '95', value: '95' },
  { text: '100', value: '100' },
  { text: '105', value: '105' },
  { text: '110', value: '110' },
  { text: '100', value: '100' },
  { text: '120', value: '120' },

];

const lables = [
  { name: "学习", id: 1, color: 'orange' },
  { name: "运动", id: 2, color: '#e4745e' },
  { name: "其他", id: 3, color: '#d68651' },
  { name: "娱乐", id: 4, color: '#a6c0f2' },
  { name: "休息", id: 5, color: '#ef549e' },
  { name: "社交", id: 6, color: '#ef4d8c' },
  { name: "工作", id: 7, color: 'lightpink' },
  { name: "未设置", id: 8, color: '#d8e1ec' },
]

const trees = [
  { name: '松树', id: 1, url: './src/assets/treesPic/songshu.png' },
  { name: '石像', id: 2, url: './src/assets/treesPic/shixiang.png' },
  { name: '珊瑚', id: 3, url: './src/assets/treesPic/shanhu.png' },
  { name: '草', id: 4, url: './src/assets/treesPic/cao.png' },
  { name: '咕咕钟', id: 5, url: './src/assets/treesPic/guguzhong.png' },
  { name: '灌木', id: 6, url: './src/assets/treesPic/guanmu.png' },
  { name: '屋树', id: 7, url: './src/assets/treesPic/shuwu.png' },
  { name: '仙人球', id: 8, url: './src/assets/treesPic/xianrenqiu.png' },
  { name: '章鱼', id: 9, url: './src/assets/treesPic/zhangyu.png' },
  { name: '蘑菇', id: 10, url: './src/assets/treesPic/mogu.png' },
  { name: '花树', id: 11, url: './src/assets/treesPic/huashu.png' },
  { name: '南瓜', id: 12, url: './src/assets/treesPic/nangua.png' },
]

const emit = defineEmits(['SettingTime', 'SettingLabel'])

// 选择树种
const myChoice = (res) => {
  treeActiveId.value = res.id
  treeUrl.value = res.url
  // console.log(treeUrl.value);
  store.commit('updateUrl', res.url)
  store.commit('backupUrl', res.url)
}

// 选择时间
const choosed = ({ selectedOptions }) => {
  time.value = selectedOptions[0].text

  // console.log(time.value);
  emit('SettingTime', selectedOptions[0].text)
}

// 选择标签
const chooseLabel = (res) => {
  LabelActiveId.value = res.id
  label.value = res.name
  labelColor.value = res.color

  emit('SettingLabel', res)
}




</script>

<style lang="less" >
.main-wrapper {
  width: 100%;
  height: 80%;
  background: #fff;
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  .main-header {
    height: 8%;
    background: #059f92;
    overflow: hidden;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;

    span {
      width: 4rem;
      height: 0.6rem;
      line-height: 0.6rem;
      background: #fff;
      display: block;
      margin: 0.3rem auto;
      text-align: center;
      font-size: 0.35rem;
      font-weight: bold;
      border-radius: 5px;
    }
  }

  .main-chooseTrees {
    height: 48%;


    .title {
      line-height: 1rem;
      margin-left: 0.4rem;
      font-weight: 600;
    }

    .treesBox {
      height: 84%;

      display: inline-block;

      .Box-wrapper {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1.3px solid rgb(232, 234, 237, 0.3);

        .item {
          width: 1.7rem;
          height: 1.7rem;
          margin-left: 0.4rem;
          margin-bottom: 0.2rem;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 2rem;
            height: 1.7rem;
          }
        }
      }

    }
  }

  .main-chooseTime {
    border-bottom: 1.3px solid rgb(232, 234, 237, 0.3);
    height: 18%;
    // background: #f6f8f9;

    .title {
      line-height: 0.8rem;
      margin-left: 0.4rem;
      font-weight: 600;
    }

    .timePicker {
      height: 74%;
      width: 16%;
      transform: rotate(-90deg);

      .van-ellipsis {
        transform: rotate(90deg);
      }
    }

  }

  .main-chooseLabel {
    height: 13%;

    .title {
      line-height: 0.8rem;
      margin-left: 0.4rem;
      font-weight: 600;
    }

    .lableBox {
      height: 55%;
      white-space: nowrap;
      overflow-x: auto;
      display: flex;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 0.6rem;
          background: rgba(227, 221, 221, 0.4);
          border-radius: 9px;
          margin: 0 0.15rem;

          .text {
            margin-right: 0.2rem;
          }
        }

        .littleCircle {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background-color: orange;
          margin: 0 0.2rem;
        }

      }
    }

    .lableBox::-webkit-scrollbar {
      width: 0;
    }
  }

  .main-bottomBar {
    height: 13%;
    display: flex;
    justify-content: space-between;


    .statusBar_wrapper {
      // background: lightpink;
      margin-left: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .myTrees {
        .soil {
          width: 1.5rem;
          height: 1.5rem;
          background-image: url(../assets/treesPic/soil.png);
          background-size: 3.3rem 2rem;
          background-position: 2.48rem;
          border-radius: 50px;
        }

        .trees {
          position: fixed;
          width: 1rem;
          height: 1rem;
          // background: lightblue;
          top: 12.6rem;
          left: 0.65rem;

          img {
            width: 100%;
            height: 100%;
          }
        }

      }

      .status {
        margin-left: 0.3rem;

        .status_time {
          line-height: 0.35rem;

          .icon-jindu_shalou {
            font-size: 0.2rem;
            margin-right: 0.1rem;
          }

          .time {
            font-size: 0.35rem;
          }

        }

        .status_lable {
          margin-top: 0.2rem;

          .text {
            font-size: 0.3rem;
          }

          .littleCircle {
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background-color: orange;
            display: inline-block;
            margin-right: 0.15rem;
          }
        }

      }

    }

    .btn {
      margin: 0.5rem 0.4rem 0.4rem;

      .van-button {
        width: 2.2rem;
        display: block;
        margin: 0 auto;
        box-shadow: 0px 2px 4px rgba(58, 161, 173, 0.486);
      }
    }
  }
}

.highlight {
  background: rgba(191, 195, 201, 0.8) !important;
}

.highlight2 {
  background: rgba(222, 225, 230, 0.8);
}
</style>