let one = null, two = null, three = null


function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      one = 1
      resolve('ok')
    }, 1000)
  })
}


function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      two = 2
      resolve()
    }, 500)
  })

}


three = 3
a().then(() => {
  b().then(() => {
    console.log(one);
    console.log(two);
    console.log(three);
  })
})

