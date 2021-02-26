// pages/senior/senior.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card_list:[
      {
        id:0,
        name:"jimmy",
        background:["szu","china"],
        specialty:["basketball","study"],
      },
      {
        id:1,
        name:"my",
        background:["geu","china"],
        specialty:["draw","study"],
      },
      {
        id:2,
        name:"jimmy",
        background:["szu","china"],
        specialty:["basketball","study"],
      },
      {
        id:3,
        name:"jimmy",
        background:["szu","china"],
        specialty:["basketball","study"],
      }
    ]
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