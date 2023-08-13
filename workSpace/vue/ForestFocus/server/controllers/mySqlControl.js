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

// 查找
const userFind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}

// 注册
const userRegister = (values) => {
  let _sql = `insert into users set username=?,password=?,nickname=?;`
  return allService.query(_sql, values)
}

//  查找日对应24小时列表
const findHour = (day, month, year) => {
  let _sql = `select * from hour where fromDay="${day}" and fromMonth="${month}" and fromYear="${year}";`
  return allService.query(_sql)
}

// 查找周对应7天列表
const findWeek = (firstDay, lastDay, month, year) => {
  let _sql = `select * from day where day>="${firstDay}" and day<="${lastDay}" and fromMonth="${month}" and fromYear="${year}";`
  return allService.query(_sql)
}

// 查找月对应30天列表
const findMonth = (month, year) => {
  let _sql = `select * from day where fromMonth="${month}" and fromYear="${year}";`
  return allService.query(_sql)
}

// 查找年对应12月列表
const findYear = (year) => {
  let _sql = `select * from month where fromYear="${year}"`
  return allService.query(_sql)
}


module.exports = {
  userLogin,
  userFind,
  userRegister,
  findHour,
  findWeek,
  findMonth,
  findYear
}
