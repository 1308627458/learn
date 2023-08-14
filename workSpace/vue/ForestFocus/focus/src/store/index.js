import { createStore } from 'vuex'
import dayjs from 'dayjs';

const store = createStore({
  state() {
    return{
      url: './src/assets/treesPic/songshu.png',
      backupUrl:'./src/assets/treesPic/songshu.png'
      
    }
  },
  mutations: {
    updateUrl(state, newUrl) {
      state.url = newUrl
    },
    backupUrl(state, newUrl) {
      state.backupUrl = newUrl
    },
    replantUrl(state) {
      state.url = state.backupUrl
    }
    
  }


});



export default store;