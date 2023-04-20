function shalldowCopy() {
    if(typeof obj !== 'object' || obj === null)  return
    let newObj = obj instanceof Array ? []: {} 

    for(let key in obj) {
        newObj[key] = obj[key]
    }

    return newObj
}


let obj = {
    name: '小红',
    age: 18,
    like: {
        type: 'coding'
    }
}

let newObj = shalldowCopy(obj) 
obj.name = '小李'
obj.age = 19
console.log(newObj);
