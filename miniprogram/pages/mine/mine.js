// pages/mine/mine.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  // 页面跳转
  gotoPage(e){
    let page = e.currentTarget.dataset.page
    wx.navigateTo({
      url: './' + page + '/' + page,
    })
  },
})