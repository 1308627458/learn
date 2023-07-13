<template>
	<div class="content">
		<Goods :imgSrc="goods.img" :title="goods.title" />
	</div>
</template>

<script>
import Goods from '../../components/goods.vue';
export default {
	components: {
		Goods
	},
	data() {
		return {
			goods: {
				img: 'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
				title: 'Apple/苹果 iPhone 11 Pro',
				price: '8699.00',
				marketPrice: '￥8699.00'
			}
		};
	},
	onLoad() {},
	methods: {
		handle() {
			console.log('handle');
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
