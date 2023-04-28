<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent === 'home'">第一周</span>
      <span class="num_tip" v-if="fatherComponent === 'item'">题目一</span>

    </header>
    <!-- 首页 -->
    <div v-if="fatherComponent === 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="/item" class="start button_style"></router-link>
    </div>

    <!-- item 问答页面 -->
    <div v-if="fatherComponent === 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="ques && ques.length > 0">
          <header class="item_title">{{ ques[itemNum].topic_name }}</header>
          <ul>
            <li class="item_list" @click="choosed(index, item.topic_answer_id)"
              v-for="(item, index) in ques[itemNum].topic_answer" :key="index">
              <span class="option_style" :class="{ 'has_choosed': chooseNum === index }">{{ chooseType(index) }}</span>
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>

        </div>

      </div>
      <span class="next_item button_style" @click="nextItem" v-if="itemNum < ques.length - 1"></span>
      <span class="submit_item button_style" v-else></span>
    </div>

  </section>
</template>

<script>
import { questions } from '@/mock'  // 没有default 需要 {}
import { reactive, ref } from 'vue';
export default {
  props: {
    fatherComponent: String
  },
  setup(props, context) {
    const ques = reactive(questions)
    // console.log(ques);
    let chooseNum = ref(null) // 选中答案
    let itemNum = ref(0) // 第几题
    let result = [] // 记录用于选中的答案

    const chooseType = (type) => {
      switch (type) {
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
        case 4: return 'E';
      }
    }
    const choosed = (index, id) => {
      // console.log(index);
      chooseNum.value = index
      result.push(id)
    }

    const nextItem = () => {
      if (chooseNum.value === null) {
        alert('您还没有选择答案')
        return
      }
      // 切换题目数据
      chooseNum.value = null
      itemNum.value++
    }

    return {
      chooseNum,
      itemNum,
      choosed,
      ques,
      chooseType,
      nextItem
    }
  }
}
</script>

<style lang="less" scoped>
.top_tips {
  position: absolute;
  width: 3.25rem;
  height: 7.35rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url('@/assets/images/WechatIMG2.png') no-repeat;
  background-size: 100% 100%;

  .num_tip {
    position: absolute;
    width: 2.5rem;
    height: 0.7rem;
    left: 0.48rem;
    bottom: 1.1rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}

.item_container_style {
  position: absolute;
  width: 13.15rem;
  height: 11.625rem;
  top: 4.1rem;
  left: 1rem;
}

.home_logo {
  background: url('@/assets/images/1-2.png') no-repeat;
  background-size: 100% 100%;

}

.button_style {
  display: block;
  width: 4.35rem;
  height: 2.1em;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.175rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.start {
  background-image: url(@/assets/images/1-4.png);
}

.item_back {
  background-image: url(@/assets/images/2-1.png);
  background-size: 100% 100%;

  .item_list_container {
    position: absolute;
    width: 8rem;
    height: 7rem;
    top: 2.4rem;
    left: 3rem;

    .item_title {
      font-size: 0.65rem;
      color: #fff;
      line-height: 0.7rem;
    }

    .item_list {
      width: 10rem;
      margin-top: 0.4rem;

      span {
        display: inline-block;
        font-size: 0.6rem;
        color: #fff;

      }

      .option_style {
        width: 0.725rem;
        height: 0.725rem;
        border: 1px solid #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 0.725rem;
        margin-right: 0.3rem;
      }

      .has_choosed {
        background-color: #ffd400;
        color: #575757;
        background-color: #ffd400;
      }
    }
  }
}

.next_item {
  background-image: url(@/assets/images/2-2.png);
}

.submit_item {
  background-image: url(@/assets/images/3-1.png);
}
</style>