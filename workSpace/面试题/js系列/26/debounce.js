// 在指定时间间隔之内没有再次触发，才执行函数

function debounce(fn, wait=1000) {
  let timer = null

  return function(...args) {
    let _this = this

    clearTimeout(timer)
    
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, wait)
  }
}