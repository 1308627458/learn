// QQ （5-15）
// const reg = /^[1-9]\d{4,14}$/
// const str = '652501825'
// console.log(reg.test(str));

// QQ邮箱
// const reg = /^[1-9]\d{4,14}@qq\.com$/
// const str = '652501825@qq.com'
// console.log(reg.test(str));

const str = '114a423c784578d'
const reg = /[a-z]/g
console.log(str.replace(reg, 0));