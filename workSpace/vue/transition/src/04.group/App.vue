
<template>
  <div>
    <button @click="addNum">add</button>
    <button @click="removeNum">remove</button>
    <button @click="shuffleNum">shuffle</button>
  </div>

  <transition-group tag="p" name="fade">
    <span v-for="item in numbers" :key="item">{{item}}</span>
  </transition-group>
</template>

<script setup>
import { ref } from 'vue';
import _ from 'lodash'

const numbers = ref([0, 1 ,2 ,3, 4, 5, 6, 7, 8, 9])
const count = ref(10)

const addNum = () => {
  numbers.value.splice(randomIndex(), 0, count.value++)
}
const removeNum = () => {
  numbers.value.splice(randomIndex(), 1)
}
const shuffleNum = () => {
  numbers.value = _.shuffle(numbers.value)
}

const randomIndex = () => {
  return Math.floor(Math.random() * numbers.value.length)
}
</script>

<style scoped>
span{
  margin-right: 10px;
  display: inline-block;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.fade-enter-active, .fade-leave-active{
  transition: all 1s ease;
}

.fade-leave-active {
  position: absolute;
}
.fade-move{
  transition: transform 1s ease;
}
</style>