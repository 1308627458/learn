let util = {
  request(opt) {
    let {url,data,header,method,dataType} = opt
    return new Promise((resolve,reject) => {
      wx.request({
        url,
        data ,
        header,
        method,
        dataType,
        success(res){
          if(res && res.statusCode === 200 && res.data) {
            resolve(res.data)
          }
        }
      })
    })
  }
}

export default util