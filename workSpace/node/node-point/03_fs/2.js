const { log } = require('console')
const fs =  require('fs')
const path = require('path')
const buf = Buffer.alloc(20) // 创建长度6个字节的内存空间


const { buffer } = require('stream/consumers')

const fileUrl = path.join(__dirname, 'temp.html')


// fs.open(fileUrl,'r', '0666', (err, fd) => {
//   console.log(fd); // 句柄 --- 描述符
// })




// fs.open(fileUrl,'r', '0666', (err, fd) => {
//   fs.read(fd, buf, 0, 6, 0, (err, bytesRead, buffer) => {
//         console.log(bytesRead);
//         console.log(buffer);
//         // 继续

//         fs.read(fd, buf, 6, 6, 6, (err, bytesRead, buffer) => {
//           console.log(bytesRead);
//           console.log(buffer);
//           console.log(buffer.toString());
//     }) 
//   }) 
// })

// fs.mkdir('./mkdir', (err) => {
//   console.log('创建成功');
// })


// fs.rmdir('./mkdir', (err) => {
//   console.log('删除成功');
// })

fs.readdir(path.resolve(__dirname, '../') , (err,data) => {
  console.log(data);
})
