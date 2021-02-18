// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["问答","发现"],
    activeIndex: 1,
    statusBarHeight: 0,
    sorts: ['关注','推荐', '深大校内','升学深造','热门行业','实践提升','求职准备','资源机会','趣味分享','咨询科普'],
    showPopup: false, // 分类栏查看更多
    Info: [
      {
        title: '面试经验分享', nickName: 'ALKAO.UA', likes_num: 124, pic: '/images/pic1.jpg'
      },{
        title: '面试经验分享、大厂实习转正经验分享', nickName: '子木仁一', likes_num: 25, pic: '/images/pic2.jpg'
      },{
        title: '保研资格获取经验分享、考研经历分享', nickName: '深圳的冬天终于来了', likes_num: 1352, pic: '/images/pic3.jpg'
      },{
        title: '面试经验分享、大厂实习转正经验分享', nickName: 'ALKAO.UA', likes_num: 124, pic: '/images/pic1.jpg'
      },{
        title: '面试经验分享', nickName: '子木仁一', likes_num: 25, pic: '/images/pic2.jpg'
      },{
        title: '保研资格获取经验分享、考研经历分享', nickName: '深圳的冬天终于来了', likes_num: 1352, pic: '/images/pic3.jpg'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight
    })
  },
  // 切换列表
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },
  // 前往列表
  gotoSearch(){
    wx.navigateTo({
      url: './search/search',
    })
  },
  // 前往详情页
  gotoDetail(){
    wx.navigateTo({
      url: './detail/detail',
    })
  },
  // 分类栏查看更多
  lookMore(){
    this.setData({
      showPopup: true
    })
  },
  // 关闭弹出层
  closePopup(){
    this.setData({
      showPopup: false
    })
  },
  onShow: function(){
    
  },
  onShareAppMessage: function () {

  }
})