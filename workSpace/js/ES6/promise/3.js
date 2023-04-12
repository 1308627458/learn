function xq() {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            console.log('老宋去相亲');
            resovle('ok')
        }, 2000)
    })

}

function marry() {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            console.log('老宋结婚了');
            resovle('ok')
        }, 1000)
    })

}

function baby() {
    setTimeout(() => {
        console.log('小宋出生了');
    }, 500)
}

// xq().then(() => {
//     marry().then(() => {
//         baby()
//     })

// })  

xq()
.then(marry)
.then(baby)   // 更简洁  链式

