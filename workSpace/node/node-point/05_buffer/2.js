const buf = Buffer.alloc(6) // 16 bytes

const buf2 = Buffer.allocUnsafe(6) // 大小为 6 bytes 的空buffer, 未初始化

console.log(buf)
console.log(buf2)