async function async1() {
  console.log('async1 start');

  await async2() //新版本浏览器 对 await 开辟了一个优先通道，提高了await 权重

  console.log('async1 end');
}

async function async2() {
  console.log('async2 ');
}

async1 ()
console.log('start');