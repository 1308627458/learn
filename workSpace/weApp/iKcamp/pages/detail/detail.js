// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:[

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
    wx.request({
      url: 'https://www.fastmock.site/mock/e39e6b4180ca7bb2b79e2e56d30b217e/IKcamp/detail',
      method:'GET',
      success:(res) => {
        console.log(res);
        // detailData = res.data.data
      }
    })
    // console.log(options);
    // let id = options.contentId
    // 拿这个id去获取对应的文章的数据

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})