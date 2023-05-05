let data = null


function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      data = { name: '大壮', age: '19' };
      resolve()
    }, 1000)
  })
}

function showData() {
  console.log(`我正在展示获取到的数据: ${JSON.stringify(data)}`);
}


getData().then(showData)
