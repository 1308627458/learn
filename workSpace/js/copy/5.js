function deepCopy(obj){
if(typeof obj !== 'object' || obj ==+ null) return
let newObj = obj instanceof Array ? [] : {}
for(let key in obj){
    // obj[key]是原始类型才直赋值
    if( typeof obj[key] === 'object' && obj[key] !== null){
    // 在创建一个新对象
    newObj[key] = deepCopy(obj[key]) // 递归
    }else{
        newObj[key] = obj[key]
    }
}
    return newObj
}


let obj = {
    name: '小红',
    age: 18,
    like: {
        type: 'coding',
        num:{
            n: 2
        }
    }
}

let newObj = deepCopy(obj) 


obj.like.num.n = 3
console.log(newObj);