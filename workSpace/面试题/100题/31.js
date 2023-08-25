// 封装一个有过期时间的 localStorage

function set(key, value) {
  let curTime = new Date().getTime();
  localStorage.setItem(key, JSON.stringify({ val: value, time: curTime}));

}

function get(key, exp) {
  let val = localStorage.getItem(key);
  let data = JSON.parse(val);
  if(new Date().getTime() - data.time > exp) { // 过期
    localStorage.removeItem(key)
  }else {
    return data.val
  }
}