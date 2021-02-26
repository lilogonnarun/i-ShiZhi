// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    curIndex: 1,
    cateItems: [{
      id: 1,
      class: '推荐',
    }, {
      id: 2,
      class: '实习'
    }, {
      id: 3,
      class: '转专业'
    }, {
      id: 4,
      class: '就业'
    }, {
      id: 5,
      class: '留学'
    }, {
      id: 6,
      class: '保研'
    }, {
      id: 7,
      class: '考研'
    }, {
      id: 8,
      class: '用户需知'
    }],
    list: [
      {
        image: '/images/pic1.jpg',
        title: '实习面经分享',
        name: '子木仁一',
        price: 25,
        view_times: 12
      },
      {
        image: '/images/pic2.jpg',
        title: '转专业经验分享',
        name: '深圳的冬天',
        price: 12,
        view_times: 53
      },
      {
        image: '/images/pic3.jpg',
        title: '就业经验分享',
        name: '不再犹豫',
        price: 48,
        view_times: 18
      },
      {
        image: '/images/pic1.jpg',
        title: '留学面经分享',
        name: '子木仁一',
        price: 25,
        view_times: 12
      },
      {
        image: '/images/pic2.jpg',
        title: '保研经验分享',
        name: '深圳的冬天',
        price: 12,
        view_times: 53
      },
      {
        image: '/images/pic3.jpg',
        title: '考研经验分享',
        name: '不再犹豫',
        price: 48,
        view_times: 18
      },
    ],
    newlist: []
  },
  onLoad: function (options) {
    this.setData({
      newlist: this.data.list
    })
    let that = this
    // 获取比例大小
    wx.getSystemInfo({
      success: function (res) {
        let ratio = 750 / res.windowWidth // 获取px与rpx的比值
        let windowHeight = res.windowHeight * ratio; //将单位为px的高度乘以上述的比值转换为单位为rpx
        that.setData({
          scroll_height: windowHeight
        })
      }
    })
  },
  //点击左侧列表切换种类
  switchRightTab: function (e) {
    let nov = e.target.dataset.index + 1;
    this.setData({
      curIndex: nov,
      newlist: this.data.list.filter((item,index)=>index==nov-2)
    })
    if (nov==1) {
      this.setData({
        newlist: this.data.list
      })
    }
  },
})