var playerAction = process.argv[process.argv.length - 1]

const game = require('./lib')


// const result = game(playerAction)
// console.log(result);

// 获取进程的输入
let count = 0
process.stdin.on('data', function(e){
    // 去除首位空格 trim()   将输出的 buffer 流转换成字符串 toString()
    //  console.log(e.toString().trim());   
    const playerAction = e.toString().trim()
    const result = game(playerAction)
    if(result === -1){
        count++
    }
    if(count === 3){
        console.log('我不跟你玩了');
        process.exit()   // 结束进程
    }

})