let obj ={
    a:1,
    b:undefined,
    c:'hello',
    d: true,
    e: ['a', 'b', 'c']
}

let arr = ['a','b', 'c','d','e']

for(let key in obj) {
    console.log(obj[key]);
}

for(let key in arr) {
    console.log(arr[key]);
}