// 找出字符串中出现最多的的字符及出现的次数

const str = 'aaabbbbbbbcccccdddddddddd'
var obj = {}

for(let i = 0; i < str.length; i++) {
  const char = str.charAt(i)
  if(obj[char]){
    obj[char]++
  }else{
    obj[char] = 1
  }
}

// 统计最大值
var max = 0 
for(let key in obj) {
  if(max < obj[key]) {
    console.log(obj[key]);
    max = obj[key]
  }
}
// console.log(max);

// 拿最大值去对比
for(let key in obj) {
  if(obj[key] == max) {
    console.log(`最多出现的字符是${key},出现次数是${max}`);
  }
}