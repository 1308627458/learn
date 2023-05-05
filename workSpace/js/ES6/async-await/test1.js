const promise1 = new Promise(function (resolve, reject) {
  console.log('promise');
  resolve('resolve1')
});

const promise2 = promise1.then(res => {
  console.log(res);
})

console.log('1', promise1);
console.log('2', promise2);