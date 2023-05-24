const fs = require('fs');
const path = require('path');

const filePath = path.dirname(__filename) + '/test.txt'

// const filePath = path.resolve(__filename, '/test.txt')
// const filePath = path.join(__filename, '/test.txt')

// console.log(filePath);

// fs.readFile(filePath, 'utf-8', (err, data) => {
//   console.log(data);
// })


// const res = fs.readFileSync(filePath, 'utf-8')   
// console.log(res);

// fs.writeFile('./text.md', '这是测试内容666',{'flag':'a' , 'mode': '0'}, (err) => {
//   var data = fs.readFileSync('./text.md', 'utf-8')
//   console.log(data);
// })

// fs.appendFile('./text.md','追加的内容', (err) => {
//   var data = fs.readFileSync('./text.md','utf-8')
//   console.log(data);
// })

// let data = fs.copyFileSync('./text.md', './text.c')
// console.log(data);

// fs.unlink('./text.c', (err, data) => {
//   console.log(data);
// })