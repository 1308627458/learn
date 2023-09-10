// 深浅拷贝

const obj = {
  name:'小妮',
  age: 18,
  hoppy: ['乒乓球','足球']
}

const n = {}

function deepClone(newObj, oldObj) {
  for(let k in oldObj) {
    newObj[k] = oldObj[k]
  }
}

deepClone(n, obj)

console.log(n);