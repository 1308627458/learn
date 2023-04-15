// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '南昌'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(() =>{
      this.setData({
        city:'赣州'
      })
    },3000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
console.log(2);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
console.log(3);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
console.log(5);
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
    console.log(1);
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