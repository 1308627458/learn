let data = null


function getData1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      data = { name: '大壮', age: '19' };
      resolve()
    }, 1000)
  })
}

function getData2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      data = { name: '大傻', age: '19' };
      resolve()
    }, 2000)
  })
}

function showData() {
  console.log(`我正在展示获取到的数据: ${JSON.stringify(data)}`);
}

async function handle() {
  await getData1()
  await getData2()
  showData();
  // xxx 
}


handle()
