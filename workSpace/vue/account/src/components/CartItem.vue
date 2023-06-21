<template>
  <van-cell-group class="item">

    <div class="header-date">
      <div>{{bill.date}}</div>
      <div class="money">
        <span><b>支</b>{{state.expense}}</span>
        <span><b>收</b>{{state.income}}</span>
      </div>
    </div>

    <van-cell 
      v-for="(item, index) in bill.bills"
      :key="index"
      :title="item.type_name"
      :value="`${item.pay_type === 1 ? '-' : '+'}${item.amount}`"
      :label="`${$filters.transTime(item.date)} ${item.remark ?  '|' + item.remark : ''}` "
    />

  </van-cell-group>
</template>

<script setup>
import { reactive } from 'vue';
const props = defineProps({
  bill: {
    type: Object,
    default: () => {}
  }
})
const state = reactive({
  income: 0,
  expense: 0
})

state.expense = props.bill.bills.filter((item) => item.pay_type === 1).reduce((pre, item) => {
  return pre + Number(item.amount)
}, 0)

state.income = props.bill.bills.filter((item) => item.pay_type === 2).reduce((pre, item) => {
  return pre + Number(item.amount)
}, 0)

</script>

<style lang='less' scoped>
  @import url('@/assets/style/custom.less');
  .item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    .header-date {
      height: 60px;
      display: flex;
      background-color: #f9f9f9;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      div {
        color: @color-text-base;
      }
      .money {
        span {
          margin-left: 20px;
          b {
            color: @color-text-caption;
            font-weight: normal;
            background-color: #f5f5f5;
            padding: 3px;
            margin-right: 2px;
          }
        }
      }
    }
  }
</style>
<style lang='less'>
  @import url('@/assets/style/custom.less');
  .expense {
    .van-cell__value {
      color: @color-text-base!important;
    }
  }
  .income {
    .van-cell__value {
      color: @text-warning!important;
    }
  }
</style>