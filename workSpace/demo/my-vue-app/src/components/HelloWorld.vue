<template>
  <div>
    <div class="input-row">
      <input v-model="question" placeholder="请输入问题" />
      <button @click="submitQuestion">提交</button>
    </div>
    <div class="answer-box">
      <textarea v-model="answer" readonly></textarea>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
  name: 'QuestionPage',
  setup() {
    const question = ref('');
    const answer = ref('');

    const submitQuestion = () => {
      axios.post('http://localhost:3000/openai',{
        question: question.value
      }).then(res => {
        console.log(res.data[0].message.content);
        answer.value = res.data[0].message.content
      })
    };

    return {
      question,
      answer,
      submitQuestion
    };
  }
};
</script>

<style>
.input-row {
  display: flex;
  margin-bottom: 10px;
}

.input-row input {
  flex: 1;
  margin-right: 10px;
}

.answer-box textarea {
  width: 100%;
  height: 200px;
}
</style>