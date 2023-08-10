import axios from 'axios'
import { showFailToast } from 'vant';


axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use( res => {
  if(res.status !== 200) {
    showFailToast('服务器异常')
  } else {
    if(res.data.code !== '80000') {
      showFailToast(res.data.msg);
      // return Promise.reject(res)
      return res
    }
  }
 
  return res.data
})

export default axios