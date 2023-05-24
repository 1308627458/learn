// Buffer.from(str, ASCLL, )   ascii  utf-8  utf16le  base64   binary  hex
// const buf = Buffer.from('hello', 'utf8')
// const buf = Buffer.from([1,2,3])
const buf = Buffer.from([0xe4,0xbd,0xa0,0xe5,0xa5,0xbd])

console.log(buf.toString(''));