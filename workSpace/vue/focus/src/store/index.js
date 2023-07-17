import { createStore } from 'vuex'


const store = createStore({
  state() {
    return{
      url: './src/assets/treesPic/songshu.png'
    }
  },
  mutations: {
    updateUrl(state, newUrl) {
      state.url = newUrl
    }
  }

});



export default store;