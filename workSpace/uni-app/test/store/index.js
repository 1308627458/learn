import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

	
const store = new Vuex.Store({
	state: {
		isLogin: false
	},
	mutations: {
		// 专门修改isLogin的函数
		storeLogin(state) {
			state.isLogin = true
		
		}
	}
})

export default store