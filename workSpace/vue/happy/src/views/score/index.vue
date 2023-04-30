<template>
  <div class="score_container">
    <header class="your_score">
      <p class="score_num">{{ score }}分！</p>
      <p class="res_tip">{{getScoreTip()}}</p>
    </header>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { questions } from '@/mock'
export default {
  setup() {
    const route = useRoute()
    console.log(route.query.answer);

    // 修改body的背景
    const bg = require('@/assets/images/4-1.jpg')
    document.body.style.backgroundImage = `url(${bg})`


    // 计算得分
    let score = 0

    function calcScore(id, idx) {
      questions[idx].topic_answer.forEach((answerItem) => {
        if (answerItem.topic_answer_id == id && answerItem.is_standard_answer) {
          score += (100 / questions.length)
        }
      })

      // questions.forEach((item) => {
      //   item.topic_answer.forEach((answerItem) => {
      //     if (answerItem.topic_answer_id == id) {
      //       if (answerItem.is_standard_answer === 1) {
      //         score += (100 / questions.length)
      //       }
      //     }
      //   })
      // })
    }

    route.query.answer.forEach((id, index) => {
      calcScore(id, index)
    })

    const scoreTipsArr = [
      "你说，是不是把知识都还给小学老师了？",
      "还不错，但还需要继续加油哦！",
      "不要嘚瑟还有进步的空间！",
      "智商离爆表只差一步了！",
      "你也太聪明啦，旅梦欢迎你！",
    ]

    const getScoreTip = () => {
      let every = 100 / questions.length
      let index = Math.ceil(score / every) - 1
      return scoreTipsArr[index]
    }

    return {
      score,
      getScoreTip
    }
  }
}
</script>

<style lang="less" scoped>
.score_container {
  width: 9.7rem;
  height: 9.1rem;
  background-image: url(@/assets/images/4-2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 1rem;
  position: relative;

  .your_score {
    position: absolute;
    width: 9rem;
    text-align: center;
    font-size: 1.4rem;
    top: 4.7rem;
    right: 0;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    text-align: center;

    .score_num {
      color: #a51d31;
    }

    .res_tip {
      color: #3e2415;
      font-size: 0.65rem;
      font-weight: 200;
      margin-top: 1rem;
    }
  }
}
</style>