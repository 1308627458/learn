<template>
  <Header class="product-header" title="商品详情"></Header>
  <div class="detail-content">
    <div class="detail-swipe-wrap">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in state.detail.goodsCarouselList" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>

      </van-swipe>
    </div>
    <div class="product-info">
      <div class="product-title">{{ state.detail.goodsName }}</div>
      <div class="product-desc">免邮费 顺丰快递</div>
      <div class="product-price">
        <span class="now">￥{{ state.detail.sellingPrice }}</span>
        <span class="old">￥{{ state.detail.originalPrice }}</span>
      </div>
    </div>

    <div class="product-introduce">
      <ul>
        <li>概述</li>
        <li>参数</li>
        <li>安装服务</li>
        <li>常见问题</li>
      </ul>
      <div class="product-content" v-html="state.detail.goodsDetailContent"></div>
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="cart-o" badge="5" text="购物车" />
        <van-action-bar-button  type="warning" text="加入购物车" @click="addCart"/>
        <van-action-bar-button  type="danger" text="立即购买"  @click="goToCart"/>
      </van-action-bar>

    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getDetail } from '@/api/service/goods.js'
import Header from '../components/Header.vue';
const route = useRoute()
console.log(route.params.id);


const state = reactive({
  detail: {}
})

onMounted(async () => {
  const { id } = route.params
  const { data } = await getDetail(id)
  state.detail = data
  console.log(data);
})

const goToCart = () => {
  // 先往购物车数据中植入一条数据
  // 再跳转到购物车页面
}

const addCart = () => {
  // 往购物车数据中植入一条数据
}
</script>

<style lang="less" scoped>
.product-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.detail-content {
  padding-top: 50px;
  height: 100%;
  overflow-y: auto;

  .detail-swipe-wrap {
    .my-swipe {
      img {
        width: 100%;
      }
    }
  }

  .product-info {
    padding: 0 10px;

    .product-title {
      font-size: 18px;
      color: #333;
    }

    .product-desc {
      font-size: 14px;
      color: #999;
      padding: 5px 0;
    }

    .product-price {
      font-size: 22px;
      color: #f63515;

      .old {
        font-size: 16px;
        color: #999;
        text-decoration: line-through;
      }
    }
  }

  .product-introduce {
    width: 100%;
    padding-bottom: 50px;

    ul {
      width: 100%;
      margin: 10px 0;
      display: flex;

      li {
        flex: 1;
        text-align: center;
        font-size: 15px;
        padding: 5px 0;
        border-right: 1px solid #999;

        &:last-child {
          border-right: none;
        }
      }
    }

    .product-content {
      padding: 0 20px;

      img {
        width: 100%;
      }
    }

  }
}</style>