// 让node能连接上MySQL

const mysql = require('mysql');
const config = require('../config');
const { errorMonitor } = require('koa');

// 创建线程池

const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

//  连接数据库， 执行sql语句

const allService = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => { // 连接数据库
        if(err) {
          reject(err)
        } else { // 连接成功
          connection.query(sql, values, (err, rows) => { // 执行sql语句
            if(err) {
              reject(err)
            } else { // sql 语句执行成功
              resolve(rows)
            }
            connection.release() //  断开连接
          })
        }
      })
    })
  }
}

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}



module.exports = {
  userLogin
}
