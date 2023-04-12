function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('aa');
            resolve('1')
        }, 1000)
    })
}
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('bb');
            resolve('2')
        }, 2000)
    })

}
function c(data) {
    setTimeout(() => {

        console.log('cc');
    }, 500)

}

// a().then((res) => {
//         console.log(res);
// })
// .catch(err => {
//     console.log(err, '1');
// })
// .finally(() => {
//     c()
// })



// Promise.all([a(),b()]).then(c) // 保证a,b 都执行完了之后执行 c

// Promise.race([a(),b()]).then(c)  // 跟着先执行的 后面 输出 c    a 比 b 先执行

// Promise.any([a(),b()]).then(c)   // 只要a ，b 任一为resolve ， 就接在后面执行 c  

