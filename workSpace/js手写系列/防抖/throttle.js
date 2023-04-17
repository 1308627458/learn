function throttle(func,wait){
    let preTime = 0

    return function() {
        let args = [...arguments]
        let now = +new Date()
        
        if(now - preTime > wait) {
            func.apply(this)
            preTime = now
        }
    }
}