<template>
  <div class="wrapper" @click="ClickOtherPlace" :class="{ fog: isfogged, mask : isMasked }">
    <!-- 头部 -->
    <div class="header">
      <!-- 左侧icon -->
      <span v-show="showLeftIcon" class="iconfont icon-fenlei" @click.stop="ShowLeftSort"
        :class="{ fog: isfogged }"></span>
      <span v-show="showBack" class="iconfont icon-fanhui" @click="backToHome"></span>
      <!-- 中间icon -->
      <div class="header_middlePart" @click.stop="ShowPopUp">
        <span class="iconfont icon-jindu_shalou"></span>
        <span class="iconfont icon-huohua"></span>
      </div>
      <!--  右侧icon -->
      <span :class="rightIconStyle" @click="playMusic"></span>
    </div>

    <!-- 提示信息 -->
    <div class="hint">
      专注! 专注！
    </div>

    <!-- 环形进度条 -->
    <CircleProgress class="showCircle" @click.stop="ChangeSettings" @DragSettingTime="DragSetTime"></CircleProgress>

    <Trees @click.stop="ChangeSettings" :isGone="isGone" :className="className" />

    <!-- 标签 -->
    <div class="lable" @click.stop="ChangeSettings">
      <span class="littleCircle" :style="`background: ${state.labelColor}`"></span>
      <span>{{ state.label }}</span>
    </div>

    <!-- 倒计时 -->
    <div v-show="showCountDown" class="time" @click.stop="ChangeSettings" >
      <van-count-down :time="time" format="mm:ss" ref="countDown" :auto-start="false" @finish="onFinish" @change="onChange" />
    </div>

    <!-- 开始按钮 -->
    <div class="button" v-show="showStartBtn">
      <van-button v-if="flag" class="btn1" type="primary" @click="start" size="small" color="#3bdcb4">开始</van-button>
      <van-button v-else class="btn2" type="success" @click="abandon" size="mini" text="放弃"></van-button>
    </div>
  </div>

  <van-dialog v-model:show="show" @confirm="confirmAbandon" title="你确定要放弃吗?" message="你的森林中会出现1颗枯萎的树" show-cancel-button
    confirmButtonText="放弃" width="280px" theme="round-button" cancel-button-color="#999">
  </van-dialog>



  <!-- 中间弹出框 -->
  <Middle_PopUp v-show="showPop" :class="Animate1"></Middle_PopUp>
  <!-- 左侧菜单 -->
  <LeftSort v-show="showLeft" :class="Animate2"></LeftSort>
  <MainSet v-show="showMain" :class="Animate3" @SettingTime="SetTime" @SettingLabel="SetLabel"></MainSet>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import useHome from './home.js'
import Middle_PopUp from '../components/Middle_PopUp.vue';
import LeftSort from '../components/LeftSort.vue';
import MainSet from '../components/MainSet.vue';
import CircleProgress from '../components/CircleProgress.vue';
import Trees from '../components/Trees.vue';
import { useStore } from 'vuex';
import dayjs from 'dayjs';
import axios from '../api'
const store = useStore()
const state = reactive({
  label: '学习',
  labelColor: '',
  studyTime: '',
  year: '',
  month: '',
  day: '',
  hour: ''
})

const currentDate = dayjs();
state.year = currentDate.year();
// 获取当前月份（注意月份从0开始，所以要加1）
state.month = currentDate.month() + 1;
state.day = currentDate.date();
state.hour = currentDate.format('HH')
const { show, showPop, isfogged, showMain, showLeft, Animate1, Animate2, Animate3, flag, isGone, className, showLeftIcon, showBack, showCountDown, showStartBtn, rightIconStyle, isMasked } = useHome()
// const show = ref(false)
// const showPop = ref(false)
// const isfogged = ref(false)
// const showLeft = ref(false)
// const showMain = ref(false)
// const Animate1 = ref('')
// const Animate2 = ref('')
// const Animate3 = ref('')
// const flag = ref(true)
// const isGone = ref(false)
// const className = ref('')
// const showLeftIcon = ref(true)
// const showBack = ref(false)
// const showCountDown = ref(true)
// const showStartBtn = ref(true)
// const rightIconStyle = ref('iconfont icon-yezi')

const time = ref(60 * 10 * 1000);

console.log(time.value);
// console.log(storetime);

// 通过滑动选择时间
const SetTime = (res) => {
  time.value = (60 * res * 1000)
}

// 通过拖拽调整时间
const DragSetTime = (res) => {
  const num = Math.floor(Math.round(res) / (100 / 22.5)) * 5 + 10
  // console.log(Math.round(res));
  time.value = (60 * num * 1000)
}

// 设置标签
const SetLabel = (res) => {
  state.label = res.name
  state.labelColor = res.color

}


const countDown = ref(null);
// 开始按钮
const start = () => {
  flag.value = false
  
  countDown.value.start();
  isGone.value = true
  className.value = 'gone'
  
  setTimeout(() => {
    store.commit('updateUrl', './src/assets/treesPic/shumiao.png')
    className.value = 'showUp'
  }, 500)

  const showCircle = document.querySelector('.showCircle')
  showCircle.style.opacity = 0

  isMasked.value = true
  showLeftIcon.value = false
  rightIconStyle.value = 'iconfont icon-18erji-3'
};

// 放弃按钮
const abandon = () => {
  // flag.value = true
  // countDown.value.reset();
  show.value = true
}
// 确认放弃
const confirmAbandon = () => {
  className.value = 'gone'
  isGone.value = true
  setTimeout(() => {
    store.commit('updateUrl', './src/assets/treesPic/kushu.png')
    className.value = 'showUp'
  }, 500)

  showBack.value = true
  showCountDown.value = false
  showStartBtn.value = false
  rightIconStyle.value = 'iconfont icon-yezi'


}
// 返回
const backToHome = () => {
  flag.value = true
  countDown.value.reset();
  store.commit('replantUrl')
  const showCircle = document.querySelector('.showCircle')
  showCircle.style.opacity = 1
  showCountDown.value = true
  showStartBtn.value = true
  showLeftIcon.value = true
  showBack.value = false
  isMasked.value = false
}

// 控制中间弹出框
const ShowPopUp = () => {
  showPop.value = true,
    isfogged.value = true
  Animate1.value = 'animate__animated  animate__bounceInDown  animate__delay-0.2s'
}

// 控制左侧菜单弹窗
const ShowLeftSort = () => {
  showLeft.value = true
  isfogged.value = true
  Animate2.value = 'animate__animated  animate__slideInLeft animate__delay-0.5s'
}

const ClickOtherPlace = () => {
  isfogged.value = false
  Animate1.value = 'animate__animated  animate__bounceOutDown  animate__delay-0.3s'
  Animate2.value = 'animate__animated  animate__slideOutLeft'
  Animate3.value = 'animate__animated  animate__fadeOutDown'
}
// 控制MainSet.vue的出现
const ChangeSettings = () => {
  showMain.value = true
  isfogged.value = true
  Animate3.value = 'animate__animated  animate__slideInUp'
}

// 播放音乐
const playMusic = () => {
  
  if(rightIconStyle.value == 'iconfont icon-yezi') return
  rightIconStyle.value == 'iconfont icon-18erji-1' ? rightIconStyle.value = 'iconfont icon-18erji-3' : rightIconStyle.value = 'iconfont icon-18erji-1'

}
// 倒计时结束事件
const onFinish = () => {
  
}

const onChange = (res) => {
  state.studyTime =(time.value / 60000) - Math.floor(res.total / 60000) - 1 
  console.log(state.studyTime );
}

const uploadAxios = async() => {
 
const { data } = await axios.post('/record/hourRecord', {
      time: state.studyTime,
      hour: state.hour,
      fromDay: state.day,
      fromMonth: state.month,
      fromYear: state.year
    })
    console.log(data);

  
} 



console.log(state.day, state.month, state.year,state.hour);
</script>

<style lang="less" >
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
      // margin-left: 0.6rem;
      top: 0.5rem;
      position: fixed;
      left: 0.6rem;
    }

    .icon-fanhui {
      top: 0.5rem;
      position: fixed;
      left: 0.6rem;
      font-size: 0.7rem;
      z-index: 3;
    }

    .icon-yezi {
      // margin-right: 0.5rem;
      position: fixed;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.6rem;
      color: rgba(157, 191, 115);

    }

    .icon-18erji-3 {
      position: fixed;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.7rem;
      z-index: 3;
    }

    .icon-18erji-1 {
      position: fixed;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.7rem;
      z-index: 3;
    }

    .header_middlePart {
      display: flex;
      position: fixed;
      top: 0.5rem;
      left: 40%;
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
    margin: 2rem auto 0;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
  }

  .showCircle {
    opacity: 1;
    transition: all 0.2s;
  }

  .lable {
    width: 1.5rem;
    height: 0.65rem;
    margin: 0.7rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: rgba(213, 224, 234, 0.2);
    border-radius: 20px;
    z-index: 3;

    .littleCircle {
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      background-color: orange;
      margin-right: 0.2rem;
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

    .btn1 {
      width: 2.5rem;
      display: block;
      margin: 0 auto;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

      
    }

    .btn2 {
      width: 2rem;
      height: 0.6rem;
      background: #059f92;
      border: 1.5px solid #fff;
      display: block;
      margin: 0 auto;
      z-index: 3;
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
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.mask {
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>