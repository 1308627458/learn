// function pow (x, n){
//   if(n === 1) return x;
//   let res = x * pow(x, n-1)
//   return res
// }

// function factorial(n) {
//   if (n === 1) return n

//   return n * factorial(n - 1)
// }


// function factorial2(n, total) {
//   if (n === 1) return n

//   return factorial2(n - 1, n * total)
// }

// console.log(factorial2(5, 1));
// console.log(factorial(5));

// 数组求和
// let arr = [1, 2, 3, 4, 5]
// function sum(arr, total) {
//   if (arr.length === 0) {
//     return total
//   }
//   return sum(arr, total + arr.pop())
// }
// console.log(sum(arr, arr.pop()));