import { createStore } from 'vuex'


const store = createStore({
  state() {
    return{
      url: './src/assets/treesPic/songshu.png',
      // storetime: '30'
    }
  },
  mutations: {
    updateUrl(state, newUrl) {
      state.url = newUrl
    },
    // updateTime(state, newUrl) {
    //   state.storetime = newUrl
    // }
    
  }


});



export default store;