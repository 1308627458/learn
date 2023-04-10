// # 石头剪刀布


// node 2.js rock

// console.log(process.argv);

var playerAction = process.argv[process.argv.length - 1]

// console.log(playerAction);


// 电脑随机生成一个
var random = Math.floor(Math.random() * 3);
if(random = 1){
    var computer = 'rock'
}else if(random = 2){
    var computer = 'scissor'
}else{
    var computer = 'paper'
}


// 比较

if(computerAction ===playerAction){
    console.log('平局');
}else if(computerAction ==='rock' && playerAction === 'paper'||
         computerAction ==='scissor'&& playerAction === 'rock'|| 
         computerAction ==='paper'&& playerAction === 'scissor')
{
    console.log('玩家获胜');
}else{
    console.log('电脑获胜');g
}
