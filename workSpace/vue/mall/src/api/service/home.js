// 封装一个函数， 方便首页直接调用这个函数就能拿到数据
import axios from '../axios.js'

export function getHomeData() {
  return axios.get('/index-infos')  // 
}

