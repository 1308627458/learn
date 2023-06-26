// 字符串秘钥格式

let s = 'yGHIm5i-2iWd-Ns', k = 3

// GHI-M5I-2IW-DNS

// 格式化字符串，使得每个组包含k个字符，第一个字符可能比k少，但至少有一个，以- 分隔且所有字母改为大写

const formatting = (s, k) => {
  // 去掉- 
  let arr = s.split('-')
  let news = arr.join('')
  console.log(news);
  // 反转数组
  let Arr = [...news].reverse()

  console.log(Arr);

  let spliceNum = `\\w{${k}}`
  let reg = new RegExp(spliceNum, 'gim')
  let Arr2 = Arr.match(reg)
  console.log(Arr2);


}

formatting(s, k)