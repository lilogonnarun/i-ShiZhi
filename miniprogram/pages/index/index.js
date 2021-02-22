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
    cards:[],
    oddCards:[],
    evenCards:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //向网页请求数据
    wx.request({
      //卡片信息接口, 存到cards内
      url: 'http://java.maozj.site:8080/api/main/qa',
      success:res=>{
        this.setData({
          cards:res.data
        })
    
      console.log(res);
    }
    })
  
      
    //请求
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
  /*TODO : change method */
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