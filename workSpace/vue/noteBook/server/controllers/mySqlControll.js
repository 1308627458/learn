//让node能连接上mySql
const mySql = require('mysql');
const config = require('../config/index.js')

// 创建一个线程池
const pool = mySql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 连接数据库, 执行sql语句 
const allServices = {
  query: function (sql,values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => { // 连接数据库
        if(err) {
          reject(err)
        } else { //连接成功
          connection.query(sql, values, (err, rows) => { // 执行sql
            if (err) {
              reject(err)
            } else{ // sql 语句执行成功
              resolve(rows)
            }
            connection.release() //断开连接
          })
        }
      })
    })
  }
}

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username = '${username}' and password = '${password}';`
  return allServices.query(_sql)
}

// 查询
const userFind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}


// 注册
const userRegister = (values) => {
  let _sql = `insert into users set username=?,password=?,nickname=?;`
  return allServices.query(_sql, values)
}

module.exports = {
  userLogin,
  userFind,
  userRegister,
}