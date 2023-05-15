import { createStore } from 'vuex'
import { createApp } from 'vue'

const store = createStore({
  state() { // 仓库里面的数据源
    return {
      count: 2
    }
  },
  mutations: { //所有修改数据源的方法都应该放到 mutations 里面
    add(state, n) {
      state.count += n;
    }
  },
     actions: {
      addAction(context, num) { // 触发 mutations 中的方法
        context.commit('add', num)                              
    }
  },
  getters: {
    countSquare(state) { // 计算属性， 只要依赖值变化就会自动重新执行
      return state.count ** 2
    }
  }
})

export default store
