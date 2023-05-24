# stream
EventEmitter 的一个实例

source --> dest  

- source (stream 来源)
  1. 从控制台输入
  2. http请求
  3. 读取文件

- pipe
  1. source.pipe(dest) 

- dest
  1. 输出到控制台
  2. http请求中的 response
  3. 写入文件

# 应用场景
  - 处理 I/O 操作, stream 本质是由于一次性的 I/O 操作过大， 硬件开销太多，影响软件运行效率， 因此将 I/O 分批次操作 

  