// 防抖 在触发一次函数之后的规定时间内没有再次触发，才执行

function debounce(func, wait){
     var timeout;
     var result

    return function(){
        // console.log(arguments);

        let that = this
        let args = [...arguments]
        
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          result = func.apply(that,args)
        },wait) 
    }
}





