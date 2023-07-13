<template>
	<view>
		<view class="banner plr30">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#eee" indicator-active-color="#d81e06" circular>
				<swiper-item v-for="item in swiper" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.imageUrl" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="main-bar flex-box plr30">
			<view class="flex-item" v-for="(item, index) in conentBar" :key="index">
				<view class="img-item">
					<image class="img" :src="`/static/index/t_${index + 1}.png`" mode=""></image>
					<text class="date" v-if="index === 0">{{ date }}</text>
				</view>
				<view class="text">{{ item.name }}</view>
			</view>
		</view>

		<!-- list -->
		<SongList/>
	</view>
</template>

<script>
import { apiGetBanner } from '@/apis/index.js';
import SongList from '@/components/songList.vue';
export default {
	components: {
		SongList
	},
	data() {
		return {
			swiper: [],
			conentBar: [{ name: '每日推荐' }, { name: '歌单' }, { name: '排行榜' }, { name: '电台' }, { name: '直播' }],
			date: new Date().getDate()
		};
	},
	onLoad() {
		this.getBanner();
	},
	methods: {
		// 获取 banner
		getBanner() {
			apiGetBanner().then((res) => {
				this.swiper = res.data.banners;
			});
		}
	}
};
</script>

<style lang="scss">
.banner {
	padding-top: 38rpx;
	// #ifdef APP-PLUS
	padding-top: 100rpx;
	// #endif
	.swiper {
		border-radius: 14rpx;
		overflow: hidden;
		.swiper-item {
			image {
				width: 100%;
			}
		}
	}
}
.main-bar {
	margin-top: 30rpx;
	.img-item {
		margin: 0 auto;
		width: 92rpx;
		height: 92rpx;
		background-color: $uni-primary-color;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		.img {
			display: block;
			width: 50rpx;
			height: 50rpx;
		}

		.date {
			position: absolute;
			bottom: 24rpx;
			color: #fff;
			font-size: 20rpx;
		}
	}
	.text {
		text-align: center;
		color: #666;
		line-height: 76rpx;
		font-size: 28rpx;
	}
}
</style>
