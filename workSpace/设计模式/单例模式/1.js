class Single {
  show(){
    console.log('我是一个单例');
  }
  // static getInstance() {
  //   if(!Single.instance) {
  //     Single.instance = new Single();
  //   }
  //   return  Single.instance;
  // }
}

  Single.getInstance = (function() {
    let instance = null
    return function() {
      if(!instance) {
        instance = new Single();
      }
      return instance
    }
  })()


const s1 =  Single.getInstance()
const s2 =  Single.getInstance()

s1 === s2 // 

console.log(s1 === s2) ;