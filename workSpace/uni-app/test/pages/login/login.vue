<template>
	<view>
		登录状态为：{{$store.state.isLogin}}
		<button @click="login">登录</button>
		登录状态为：{{isLogin}}
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		// computed: mapState({
		// 	isLogin: state => state.isLogin
		// }),
		computed: {
			...mapState(['isLogin']),
		},
		methods: {
			...mapMutations(['storeLogin']),
			
			login() {
				setTimeout(() =>{
					// this.$store.commit('storeLogin')
					this.storeLogin()
				},1000)
			}
		}
	}
</script>

<style lang="scss">

</style>
