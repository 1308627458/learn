function a() {
    console.log('aa');
}
function b() {
    
    setTimeout(() =>{  // 异步代码
    console.log('bb');  
    },1000)
}
function c() {
    console.log('cc');
}

a()
b()
c()