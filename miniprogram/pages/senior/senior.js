// pages/senior/senior.js
Page({

  /*
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    tabs:['推荐','深大','职场','其他'],
    
  },
    // 切换列表
    tabClick: function (e) {
      this.setData({
        activeIndex: e.currentTarget.id
      })
    },
  onLoad: function (options) {

  },
  gotoSearch(){
    wx.navigateTo({
      url: './search/search',
    })
  },
  onShareAppMessage: function () {

  }
})