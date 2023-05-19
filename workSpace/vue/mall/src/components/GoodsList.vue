<template>
  <div class="goods">
    <div class="goods-header"> {{ props.title }} </div>
    <van-skeleton title :row="3" :loading="!props.newGoodses.length">
      <div>
        <div class="goods-box">
          <div class="goods-item" v-for="item in props.newGoodses" :key="item.goodsId" @click="goToDetail(item)">
            <img :src="item.goodsCoverImg" alt="">
            <div class="goods-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">￥{{ item.sellingPrice }}</div>
            </div>
          </div>     
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToDetail = (item) => {
  console.log(item);
  router.push({path: `/product/${item.goodsId}`}) 
}
const props = defineProps({
  newGoodses: Array,
  title: String,
  hotGoodses: Array,
  recommendGoodses: Array,
})
</script>

<style lang="less" scoped>
@import '@/assets/var.less';

.goods {
  &-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: @primary;
    font-size: 16px;
    font-weight: 500;
  }

  &-box {
    display: flex;
    flex-wrap: wrap;

    .goods-item {
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px;
      box-sizing: border-box;

      img {
        width: 120px;
        display: block;
        margin: 0 auto;
      }

      .goods-desc {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;

        .title {
          color: #222333;
        }

        .price {
          color: @primary;

        }
      }

      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}</style>