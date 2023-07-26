// 在指定的时间间隔内只执行一次

function throttle(fn, delay=1000) {
  let oldTime = Date.now()

  return function(...args) {
    let _this = this

    let newTime = Date.now()

    if (newTime - oldTime >= delay) { // 间隔时间大于等于指定时间
      fn.apply(_this, args)
      oldTime = Date.now()
    }
    
  }
}