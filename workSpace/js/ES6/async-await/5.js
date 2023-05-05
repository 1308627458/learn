function getContent() {
  return 1
}

async function getAsyncContent() {
  return 1
}

async function getPromise() {
  return new Promise( (resolve, reject) => {
    resolve(1)
  })
}

// async. await 会被执行成什么样
async function test() {
  let a = 2
  let c = 1
  await getContent()
  let d = 3
  await getPromise()
  let e = 4
  await getAsyncContent()
  return 2
}