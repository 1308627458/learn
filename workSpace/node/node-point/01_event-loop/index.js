// process.nextTick(() => console.log(1))
// Promise.resolve().then(() => console.log(2))
// process.nextTick(() => console.log(3))
// Promise.resolve().then(() => console.log(4))


setImmediate(() =>console.log(2))
setTimeout(() =>console.log(1))
