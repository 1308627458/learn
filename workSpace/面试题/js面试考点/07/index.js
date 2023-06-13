// let a = {
//   age: 18,
//   like:{
//     sports:'running',
//     books:'JavaScript',
//     person:'John',
//   }
// }
// // 浅拷贝
// // let b = Object.assign({}, a)     方式一
// let b = {...a}                   // 方式二

// b.age = 19
// b.like.books = 'Vue.js'
// console.log(a); // age不变 books变成Vue.js



// 深拷贝

let a = {
  age: 18,
  like:{
    sports:'running',
    books:'JavaScript',
    person:'John',
  }
}

let b = JSON.parse(JSON.stringify(a))

b.age = 19
b.like.books = 'Vue.js'

console.log(a); 
console.log(b);









