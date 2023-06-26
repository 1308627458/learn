// 分解质因数

// 10 [2,5] 
// 20 [2,5]


// 1.解
// function getZY(num) {
//   let res = []
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0 && help(i)) { // i 是num的因子
//       res.push(i)
//     }
//   }

//   return res
// }


// function help(n) {
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0 && (i !== 1 && i !== n)) {
//       return false
//     }
//   }
//   return true
// }


// 2.解

function getZY(num) {
  let res = []
  for (let i = 2; i * i <= num; i++) {
    while( num % i === 0) {
      num = num / i
      res.push(i)
    }
  }
  if(num !== 1) res.push(num)
  return res
}

console.log(getZY(660));