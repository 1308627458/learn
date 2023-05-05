# async/await

- js 中存在异步概念


1. new XMLHttpRequest()
2. ajax(jq)
3. fetch()

- await 必须写在 async 函数里面
- await 后面接的逻辑必须返回一个 promise 对象
- 解决掉了 promise 的调用链，代码更清晰
- await 会阻塞下一行代码的执行 