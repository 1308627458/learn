<template>
  <div class="goods">
    <div class="memu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item " v-for="(item, index) in goods" key="index" @click="selectMenu(index)"
          :class="{ 'current': currentIndex === index }">
          <span class="text">
            <supportIcon size="3" :type="item.type" v-if="item.type >= 0"></supportIcon>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>

    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <!-- 一个菜单 -->
        <li class="food-list" v-for="(item, index) in goods" key="index" ref="foodList">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <!-- 每道菜 -->
            <li class="food-item" v-for="(food, index) in item.foods" key="index">
              <div class="pic">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}</span>
                </div>
                <div class="prcie">
                  <span class="now">￥{{ food.price }}</span>
                  <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <Cartcontrol :food="food"></Cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- cart -->
    <div class="cart-wrapper">
      <ShopCart :selectFoods="selectFoods"></ShopCart>
    </div>
  </div>
</template>

<script setup>

import { getGoods } from '@/api'
import { computed, h, nextTick, onMounted, onUpdated, reactive, ref, toRefs, watch, watchEffect } from 'vue';
import supportIcon from '@/components/support-icon/support-icon.vue';
import BetterScroll from 'better-scroll'
import Cartcontrol from '@/components/cart-control'
import ShopCart from '@/components/shop-cart'
const menuWrapper = ref(null)
const foodsWrapper = ref(null)
const foodList = ref([])
let state = reactive({
  goods: [],
  menuScroll: {},
  foodsScroll: {},
  // currentIndex: 0,
  scrollY: 0,
  listHeight: [],
})
let { goods } = toRefs(state)

// 获取商品数据
getGoods().then(res => {
  // goods.value = res
  state.goods = res
  console.log(res);
})

// 选中菜单
const selectMenu = (idx) => {
  // state.currentIndex = idx
  console.log(foodList.value);
  const element = foodList.value[idx]
  state.foodsScroll.scrollToElement(element, 300)
}

// 滚动页面显示对应菜单
const currentIndex = computed(() => {
  // 判断此时foodsWrapper 滚动的距离，大于第一个菜系，就让菜单选中下一项
  // state.scrollY state.listHeight
  for (let i = 0; i < state.listHeight.length; i++) {
    let height1 = state.listHeight[i]
    let height2 = state.listHeight[i + 1]
    if (!height2 || (state.scrollY >= height1 && state.scrollY < height2)) {
      return i
    }
  }
  return 0
})

// BScroll
function betterScroll() {
  const _initScroll = () => {
    state.menuScroll = new BetterScroll(menuWrapper.value, {
      click: true,
      scrollY: true
    })
    state.foodsScroll = new BetterScroll(foodsWrapper.value, {
      click: true,
      scrollY: true,
      probeType: 3
    })
    state.foodsScroll.on('scroll', pos => {
      // console.log(pos);
      state.scrollY = Math.round(Math.abs(pos.y))
    })
  }
  nextTick(() => { //dom加载完毕后才会执行的函数 
    _initScroll()
  })
  setTimeout(() => {
    state.menuScroll.refresh()
    state.foodsScroll.refresh()
    _calculateHeight()
  }, 500)
}
betterScroll()

// 计算各个菜系的高度
const _calculateHeight = () => {
  // console.log(foodList.value);
  let height = 0
  state.listHeight.push(height);
  foodList.value.forEach(li => {
    // console.log(li.clientHeight);
    height += li.clientHeight
    state.listHeight.push(height)
  });
  console.log(state.listHeight);
}

// 加入购物车

const selectFoods = computed(() => {
  let foods = []
  for(let item of state.goods){
    if(item.foods){
      for(let food of item.foods){
        if (food.count > 0) {
          foods.push(food)
        }
      }
    }
  }
   console.log(foods);
  return foods
 
})
// watch(
//   () => state.goods,
//   (newVal) => {
//     console.log(newVal);

//   },
//   { deep: true }
// )



</script>

<style lang="less" scoped>
@import '@/common/variable.less';

.goods {
  display: flex;
  width: 100%;
  position: absolute;
  top: 177px;
  bottom: 46px;
  overflow: hidden;

  .memu-wrapper {
    flex: 0 0 80px;
    background: @color-background-ssss;
    // overflow: scroll;

    .menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      font-size: @fontsize-small;
      line-height: 14px;
      height: 54px;

      &.current {
        background: #fff;
        font-weight: 700;
      }
    }
  }

  .foods-wrapper {
    flex: 1;

    .title {
      height: 26px;
      line-height: 26px;
      font-size: @fontsize-small;
      color: rgb(147, 153, 159);
      background: @color-background-ssss;
      padding-left: 14px;
      border-left: 2px solid #d9dde1;
    }

    .food-item {
      display: flex;
      padding: 18px;
      position: relative;

      .pic {
        width: 57px;
        margin-right: 10px;

        img {
          width: 100%;
        }
      }

      .content {
        flex: 1;

        .name {
          height: 14px;
          line-height: 14px;
          font-size: @fontsize-medium;
          color: rgb(7, 17, 27);
          margin: 2px 0 8px 0;
        }

        .desc,
        .extra {
          font-size: @fontsize-small-s;
          line-height: 10px;
          color: rgb(147, 153, 159);
          margin-bottom: 8px;

          .count {
            margin-right: 12px;
          }
        }

        .prcie {
          font-weight: 700;
          line-height: 8px;

          .now {
            font-size: @fontsize-medium;
            color: @color-red;
            margin-right: 8px;
          }

          .old {
            font-size: @fontsize-small-s;
            color: rgb(147, 153, 159);
            text-decoration: line-through;
          }
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 18px;
          bottom: 4px;
        }

      }
    }
  }

  .cart-wrapper{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
  }
}
</style>