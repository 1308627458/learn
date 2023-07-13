<template>
	<view class="goods" @click="goDetail">
		
		<!-- <navigator url="/pages/detail/detail"> -->
			<image :src="imgSrc" mode=""></image>
			<view class="desc">
				{{title}}
			</view>
		<!-- </navigator> -->
		
	</view>
</template>

<script>
	export default {
		name:"goods",
		props: {
			imgSrc: {
				type: String,
				default: ""
			},
			title: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			goDetail(){
				// window.location.hash = '/detail';
				uni.navigateTo({
					url: '/pages/detail/detail?id=123'
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods{
		position: relative;
		width: 342rpx;
		height: 502rpx;
		line-height: 34rpx;
		color: #333;
		background-color: #fff;
		border-radius: 10rpx;
		overflow: hidden;
		font-size: 26rpx;
		.img{
			display: block;
			width: 100%;
			height: 342rpx;
			margin-bottom: 24px;
			background: #eee;
		}
		.desc{
			height: 64rpx;
			line-height: 30rpx;
		}
	}
	
</style>