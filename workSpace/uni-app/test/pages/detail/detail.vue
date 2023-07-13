<template>
	<view class="iconfont  icon-jindu_shalou">
		6666
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(option){
			console.log(option);
			uni.request({
				url:"https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike",
				data:{},
				header:{
					'custom-header': 'hello'
				},
				success(res) {
					console.log(res);
					uni.setStorage({
						key: 'movie_list',
						data: res.data.moveList,
						success() {
							console.log("保存好了");
						}
					})
				}
			})
		}
	}
</script>

<style>

</style>
