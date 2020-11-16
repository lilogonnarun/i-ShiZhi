// pages/sort/sort.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar() // 点击切换tabbar事件
  },
  onShow: function(){
    
  },
  onShareAppMessage: function () {

  }
})