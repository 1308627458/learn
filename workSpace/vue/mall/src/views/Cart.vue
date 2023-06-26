<template>
  <Header title="购物车" class="cart-header"></Header>
  <div class="cart-wrapper">

    <van-checkbox-group v-model="state.result" ref="checkboxGroup" @change="groupChange">
      <van-swipe-cell v-for="item in state.cartList" :key="item.goodId">
        <van-checkbox :name="item.cartItemId" />
        <van-card :price="item.sellingPrice" :title="item.goodName" class="goods-card" :thumb="item.goodsCoverImg">
          <template #footer>
            <van-stepper v-model="item.goodsCount" min="1" max="5" @change="onChange" :name="item.cartItemId" />
          </template>

        </van-card>
        <template #right>
          <van-button @click="deleteGoods(item.cartItemId)" square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </van-checkbox-group>
  </div>

  <van-submit-bar class="submit-all" :price="totalPrice * 100" button-text="提交订单" @submit="onSubmit">
    <van-checkbox class="check-all" v-model="state.checkedAll" @click="allChecked">全选</van-checkbox>
  </van-submit-bar>
  <NavBar></NavBar>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import { reactive, onMounted, computed, watch } from 'vue'
import { getCart, modifyCart, deleteCartItem } from '@/api/service/cart.js'
import { showLoadingToast, closeToast, showFailToast  } from 'vant';
import { useCartStore } from '@/store/cart.js'
import { useRouter } from 'vue-router';
const router = useRouter()
const cartStore = useCartStore()
const state = reactive({
  result: [],
  cartList: [],
  checkedAll: false,
})

onMounted(() => {
  init()
})
const init = async () => {
  showLoadingToast({ message: '加载中...', forbidClicks: true, duration: 0 })
  const { data } = await getCart({ pageNumber: 1 })
  console.log(data);
  state.cartList = data
  closeToast()
 
}

const onChange = async (value, detail) => {
  showLoadingToast({ message: '修改中...', forbidClicks: true, duration: 0 })
  const params = {
    cartItemId: detail.name,
    goodsCount: value
  }
  await modifyCart(params)
  closeToast()
}

const totalPrice = computed(() => {
  let sum = 0
  let _list = state.cartList.filter(item => state.result.includes(item.cartItemId))
  _list.forEach(item => {
    sum += item.sellingPrice * item.goodsCount
  })
  return sum
})


// 全选按钮
const allChecked = (checked) => {
  if (!state.checkedAll) {
    state.result = []
  } else {
    state.result = state.cartList.map(item => item.cartItemId)
  }
}


const groupChange = (result) => {
  state.checkedAll = result.length === state.cartList.length ? true : false
}

// 购物车删除按钮
const deleteGoods =  async (id) => {
  await deleteCartItem(id)
   cartStore.initBadge()
   init()
}

// 提交订单
const onSubmit = () => {
  if (state.result.length == 0) {
    showFailToast('请选择商品进行结算');
    return
  }
  router.push({path:'/create-order', query:{cartItemIds: state.result ,price:totalPrice._value, } })
  // console.log(totalPrice._value);
}
</script>

<style lang="less" scoped>
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}

.cart-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.cart-wrapper {
  padding-top: 50px;
  padding-bottom: 110px;
}
</style>

<style>
.van-swipe-cell__wrapper {
  display: flex;
  padding-left: 15px;
}

.van-checkbox {
  width: 22px;
}

.goods-card {
  flex: 1;
}

.van-card__num {
  position: absolute;
  top: 0;
  right: 0;
}

.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 8px;
}

.van-card__price {
  color: red !important;
  font-size: 16px;
}

.submit-all {
  bottom: 50px !important;
}

.check-all {
  width: 60px;
}
</style>