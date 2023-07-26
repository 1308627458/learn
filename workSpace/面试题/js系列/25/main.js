let a = 9007199254740994   // a[15]
let b = 2347199254740984


function sum(a, b) {
  a = a.toString()
  b = b.toString()
  const len = Math.max(a.length, b.length)
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')

  let res = ''
  let carry = 0  // 进位
  for (let i = len - 1; i >= 0; i--) {
    const n = +a[i] + +b[i] + carry  // 19
    // n 是否大于 10
    carry = Math.floor(n / 10)
    res = (n % 10) + res

    // if (n >= 10) {
    //   carry = 1
    //   res = (n % 10) + res
    // } else {
    //   res = n + res
    //   carry = 0
    // }
    
  }

  if (carry) {
    res = '1' + res
  }
  
  return Number(res)
}


console.log(sum(a, b));