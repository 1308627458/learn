<template>
  <van-popup closeable round position="bottom" v-model:show="show" :style="{}">
    <div class="pop">
      <div class="header">
        请选择类型
        <van-icon name="cross" class="cross" @click="close"/>
      </div>
      <div class="content">
        <div @click="chooseType({id: 'all'})" class="all" :class="{'active': state.active === 'all'}">全部类型</div>

        <div class="title">支出</div>
        <div class="expense-wrap">
          <p @click="chooseType(item)" :class="{'active': state.active === item.id}" v-for="item in state.expense" :key="item.id">{{ item.name }}</p>
          
        </div>

        <div class="title">收入</div>
        <div class="income-wrap">
          <p @click="chooseType(item)" :class="{'active': state.active === item.id}" v-for="item in state.income" :key="item.id">{{ item.name }}</p>
          
        </div>


      </div>
    </div>
  </van-popup>
</template>

<script setup>
import axios from 'axios';

import { onMounted, reactive, ref } from 'vue';

const show = ref(true)
const state = reactive({
  expense:[],
  income:[],
  active: '全部类型'
})



onMounted(async() => {
  const {data} = await axios.get('/type/list')
  console.log(data);

  state.expense = data.list.filter((item) => {
    return item.type == 1
  })
  
  state.income = data.list.filter((item) => {
    return item.type == 2
  })
  
})

const close = () => {
  show.value = false
}

const emits = defineEmits(['select'])
const chooseType = (item) => {
  state.active = item.id
  show.value = false
  emits('select',item)
}

defineExpose({
  show
})
</script>

<style lang="less" scoped>
@import url('@/assets/style/custom.less');

.pop {
  position: relative;
  background-color: #f5f5f5;

  .header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 56px;
    text-align: center;
    font-size: 14px;
    line-height: 56px;
    color: @color-text-base;
    background-color: #fff;

    .cross {
      position: absolute;
      left: 10px;
      top: 50%;
      font-size: 20px;
      transform: translateY(-50%);
      color: @color-text-secondary;
    }
  }

  .content {
    padding: 20px;

    .all {
      display: inline-block;
      padding: 12px 20px;
      font-size: 16px;
      color: @color-text-base;
      background-color: #fff;
    }

    .title {
      color: @color-text-caption;
      margin: 10px 0;
      font-size: 14px;
    }

    .expense-wrap,
    .income-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      p {
        width: calc(~"(100% - 20px) / 3");
        text-align: center;
        padding: 12px 0;
        margin-bottom: 10px;
        background-color: #fff;
        font-size: 16px;
      }
    }

    .active {
      background-color: @primary !important;
      color: #fff;
    }
  }
}</style>