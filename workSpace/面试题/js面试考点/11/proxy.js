let onWatch = (obj, getVal, setVal) => {
  let handler = {
    get(target, key, receiver) {
      // return target[key];       // 1
      gerVal()
    return  Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      // target[key] = value;      // 2
      Reflect.set(target, key, value, receiver)
      // changeView()
    },
    // ....11
  }
  
 return new Proxy(obj, handler) 

}

let obj = {a: 1}
let newObj = onWatch(
  obj,
  () => {
  console.log('你又来取值了');
  },
  changeView
)

newObj.a = 2
console.log(newObj.a);


function changeView() {
  console.log('页面更新了');
}