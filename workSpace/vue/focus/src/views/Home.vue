<template>
  <LeftSort v-show="showLeft"></LeftSort>
  <div class="wrapper" @click="ClickOtherPlace" :class="{ fog: isfogged }">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont icon-fenlei" @click.stop="ShowLeftSort" :class="{ fog: isfogged }" ></span>
      <div class="header_middlePart" @click.stop="ShowPopUp">
        <span class="iconfont icon-jindu_shalou"></span>
        <span class="iconfont icon-huohua"></span>
      </div>
      <span class="iconfont icon-yezi"></span>
    </div>

    <!-- 提示信息 -->
    <div class="hint">
      专注! 专注！
    </div>

    <!-- 环形进度条 -->
   
    <CircleProgress @click.stop="ChangeSettings" @DragSettingTime="DragSetTime"></CircleProgress>
    <div class="trees">
      <img src="../assets/treesPic/main.png" alt="">
    </div>

    <!-- 标签 -->
    <div class="lable" @click.stop="ChangeSettings">
      <span class="littleCircle"></span>
      <span>{{state.label}}</span>
    </div>

    <!-- 倒计时 -->
    <div class="time" @click.stop="ChangeSettings">
      <van-count-down :time="time" format="mm:ss" ref="countDown" :auto-start="false" />
    </div>

    <div class="button">
      <van-button type="primary" @click="start" size="small">开始</van-button>
    </div>

  </div>
  <Middle_PopUp v-show="showPop" :class="Animate"></Middle_PopUp>
  <Main v-show="showMain" @SettingTime="SetTime" @SettingLabel="SetLabel"></Main>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Middle_PopUp from '../components/Middle_PopUp.vue';
import LeftSort from '../components/LeftSort.vue';
import Main from '../components/Main.vue';
import CircleProgress from '../components/CircleProgress.vue';


const state = reactive({
  label:'学习'
})

const showPop = ref(false)
const isfogged = ref(false)
const showLeft = ref(false)
const showMain = ref(false)

const time = ref(60 * 10 * 1000);

// 通过滑动选择时间
const SetTime = (res) =>{
  time.value = (60 * res * 1000) 
}

// 通过拖拽调整时间
const DragSetTime = (res) => {
  const num = Math.floor(Math.round(res) / (100/22.5)) * 5 + 10
  // console.log(Math.round(res));
  time.value = (60 * num * 1000)
}

const SetLabel = (res) => {
  state.label = res
  console.log(res);
}

const countDown = ref(null);

const start = () => {
  countDown.value.start();
};

const Animate = ref('')
// 控制中间弹出框
const ShowPopUp = () => {
  showPop.value = true,
    isfogged.value = true
  // Animate.value = 'animate__animated  animate__bounceOutDown  animate__delay-0.2s'
  Animate.value = 'animate__animated  animate__bounceInDown  animate__delay-0.2s'
}

// 控制左侧菜单弹窗
const ShowLeftSort = () => {
  showLeft.value = true
  isfogged.value = true
  
}

const ClickOtherPlace = () => {

  isfogged.value = false
  showLeft.value = false
  showMain.value = false
  // Animate.value = ''
  Animate.value = 'animate__animated  animate__bounceOutDown  animate__delay-0.2s'
}

const ChangeSettings = () => {
  showMain.value = true
  isfogged.value = true
  
}


</script>

<style lang="less" scoped>
.wrapper {
  background: #059f92;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;

    .iconfont {
      color: #fff;
    }

    .icon-fenlei {
      margin-left: 0.6rem;
    }

    .icon-yezi {
      margin-right: 0.5rem;
      text-align: center;
      font-size: 0.6rem;
      color: rgba(157, 191, 115);
    }

    .header_middlePart {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 0.65rem;
      background: rgba(130, 117, 117, 0.3);
      border-radius: 15px;
      box-sizing: border-box;

      .icon-jindu_shalou {
        width: 0.9rem;
        text-align: center;
        border-right: 1.5px solid #fff;
      }

      .icon-huohua {
        width: 0.9rem;
        font-size: 0.8rem;
        text-align: center;

      }
    }
  }

  .hint {
    width: 3rem;
    height: 1rem;
    margin: 1.5rem auto 0;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
  }

  // .circle {
  //   margin: 1.2rem auto 0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  .lable {
    width: 1.5rem;
    height: 0.65rem;
    margin: 0.5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: rgba(213, 224, 234, 0.2);
    border-radius: 20px;

    .littleCircle {
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      background-color: orange;
      margin-right: 0.2rem;
    }
  }
  .trees{
    position: fixed;
    top: 25.2%;
    left: -6.2%;
    z-index: 1;
    img{
      width: 11.85rem;
      height: 7.6rem;
      
    }
  }


  .time {
    width: 100vw;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .van-count-down {
      font-size: 2rem;
      color: #fff;
    }
  }

  .button {
    margin-top: 0.5rem;

    .van-button {
      width: 2.5rem;
      display: block;
      margin: 0 auto;
    }
  }


}

.fog {
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>