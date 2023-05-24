# 文件操作 fs

对文件系统的增删改查， 所有的操作都提供了异步和同步 (sync) 两个版本

- 系统文件常识
1. 权限位 (mode)
2. 标识位 (flag)
  r  r+  rs  w  wx  w+  ... 
3. 文件描述符 (fd) 
  process.stdin() // 标准输入
  process.stdout() // 标准输出
  process.stderr() // 错误输出

- fs.readFile(x, y, z) x:文件名的绝对路径  y:编码  z:回调

- fs.writeFile(filenameUrl, data, [option], callback) 写文件

- fs.appendFile(filenameUrl, data, [option], callback) 添加内容

- fs.copyFile(filenameA, filenameB, callback) 复制文件

- fs.unlink(filenameUrl, callback)  删除文件

- fs.read(fd, buffer, offset, length, position, cb) 

- fs.mkdir(path, [option], cb)

- - fs.readdir(path, [option], cb)