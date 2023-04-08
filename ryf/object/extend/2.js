let cai = {   // 对象， js 没有类
    nickname: "东里情圣",
    sayHi() {
    console.log('hi');
   }
}

let aT = {
    // nickname:"广兰第一盲僧"
};
// console.log(aT.__proto__);
// 拦截__proto__ 任何一个对象都拥有的私有属性
// 原型
aT.__proto__ = cai;
console.log(aT.nickname)