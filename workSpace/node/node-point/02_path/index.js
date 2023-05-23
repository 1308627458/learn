const path = require('path');

const test = require('./path.js')
// console.log(test);

// console.log(__dirname);   // js文件所在文件夹的绝对路径
// console.log(__filename);   // js 文件的绝对路径
// console.log(process.cwd());  // node 命令运行在的文件夹的绝对路径
// console.log(path.resolve('./'))  // 使用在require中 === __dirname ，否则 === process.cwd()

 // 当前目录下
// const url = path.dirname(__filename) + '/path.js'
// // 相邻目录下
// const url2 = path.resolve(__dirname,'../01_event-loop/1.js') 

// const url3 = path.resolve(__dirname, '/index.js')
// console.log(url);
// console.log(url2);
// console.log(url3);

// 拼接
console.log(path.join('src','test','a.js'));


// console.log(path.parse('\Users\86186\Desktop\lesson_my\workSpace\node\node-point\02_path'));

console.log(path.basename('\Users\86186\Desktop\lesson_my\workSpace\node\node-point\02_path'));
console.log(path.relative(''));
