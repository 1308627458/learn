function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      one = 1
      resolve('yes')
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('bbb');
    resolve('牛')
  },500)
  })
  
}

a()
  .then((res) => {
    console.log('hello',res);
    return b()
    //  return 'yes2'
  })
  .then((res2) => {
    console.log('hello2',res2);
   
  })
