<template>
  <Header title="生成订单" />
  <div class="address-wrap">
    <div class="name">
      <span>芋头</span>
      <span>18679139120</span>
    </div>
    <div class="address">
      江西省 南昌市 青山湖区 范家村
    </div>
    <van-icon  @click="goToAddressList" name="arrow" class="arrow" />
  </div>

  <div class="goods">
    <div class="goods-item" v-for="item in state.orderList" :key="goodsId">
      <van-card :num="item.goodsCount" :price="item.sellingPrice" :title="item.goodsName" :thumb="item.goodsCoverImg" />
    </div>
  </div>
  <div class="pay-wrap">
    <div class="price">
      <span>商品金额</span>
      <span>￥{{ route.query.price }} </span>
    </div>
    <van-button type="primary" block> 订单结算 </van-button>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import { reactive, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getOrderByCartItemId } from '../api/service/cart.js'
const route = useRoute()
const router = useRouter()
console.log(route.query);
const state = reactive({
  orderList: []
})
onMounted(() => {
  init()
})

const init = async () => {
  let params = []
  if (typeof route.query.cartItemIds == 'string') {
    params = route.query.cartItemIds
  } else {
    params = route.query.cartItemIds.join(',')
  }
  const { data } = await getOrderByCartItemId({ cartItemIds: params })
  console.log(data);
  state.orderList = data
}

const goToAddressList = () => {
  router.push({ path: '/address'})
}
console.log(state.orderList);

// const finalPrice = computed((item) => {
//   let sum = 0
//   sum += item.sellingPrice * item.goodsCount
//   return sum
// })

</script>

<style lang="less" scoped>
.address-wrap {
  background: #fff;
  font-size: 14px;
  padding: 15px;
  color: #222333;
  margin-bottom: 20px;
  position: relative;

  .address,
  .name {
    margin: 10px 0;
  }

  .arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: repeating-linear-gradient(45deg,
        #ff6c6c 0, #ff6c6c 20%,
        transparent 0, transparent 25%,
        #1989fa 0, #1989fa 45%,
        transparent 0, transparent 50%,
      );
    background-size: 80px;
  }
}
.pay-wrap{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 10px 20px;
  border-top: 1px solid #e9e9e9;
  .price{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 18px;
    span:nth-child(2){
      color: red;
    }
  }
}
</style>