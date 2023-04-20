// let a = {name:'大傻'}
// let b = Object.create(a)
// a.name = '小傻'
// console.log(b.name);

let arr = [{n:'old'},'old',1,true,null,undefined]
// let newArr = arr.concat()
let newArr = arr.slice() 
arr[0] = 'new'
console.log(newArr)  // 浅拷贝

