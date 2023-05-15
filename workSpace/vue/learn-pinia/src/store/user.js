import { defineStore } from 'pinia'


export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo:{
        name: '老宋',
        sex: '男',
        age: '22',
      },
      articles: [1,2,3]
    }
  },
  actions: {
    changeUserInfo(name) {
      this.userInfo = {
        name: name,
        sex: '沃尔玛塑料袋',
        age: '21',
      }
    }
  },
  getters: {
    doubleAge(state) { // getter 中的函数名可直接当做变量使用
      return state.userInfo.age + '岁' 
    }
  },
  persist: { // 开启数据缓存
    enabled: true,
    strategies: [
      {
        paths:['userInfo'],
        storage:localStorage
      }
    ]
  }
})