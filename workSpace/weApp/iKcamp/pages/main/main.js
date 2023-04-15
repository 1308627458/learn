// pages/main/main.js
import util from '../../utils/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 发接口请求获取数据 （异步）
   
    util.request({
      url: 'https://www.fastmock.site/mock/e39e6b4180ca7bb2b79e2e56d30b217e/IKcamp/list'
    }).then((res) => {
      //  console.log(res.data);
      let articleList = this.formatArticleDate(res.data)
      //  console.log( articleList);
       this.setData({
         articleList: articleList
       })
    })
  },

  formatArticleDate(data) {
    let formatData = null
    if(data && data.length){
        formatData =  data.map((group) => {
        group.formatDate = this.dateConvert(group.date)
        return group
      })
    }
    return formatData
  },

  dateConvert(dateStr){
  if(!dateStr) return
    let arr = dateStr.split('-')
    return `${arr[0]}年${arr[1]}月${arr[2]}日`
  },
  goDetail(e){
    // console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?contentId=${id}`,
    })
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