let obj = {name: '猪猪侠', age: 18}
// JSON

// console.log(obj.toString());


// let strObj = JSON.stringify(obj) // 对象转字符串
// console.log(JSON.parse(strObj)); // 字符串转回对象

// let newObj = JSON.parse(JSON.stringify(obj))
// obj.age = 19
// console.log(newObj);

let arr = [{n:'old'},1,true,undefined]
let newArr = JSON.parse(JSON.stringify(arr))
arr[0].n = 'new'
console.log(newArr);

