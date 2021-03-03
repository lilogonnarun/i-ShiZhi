// pages/mine/collection/collection.js
Page({
  data: {
    label_list: [
      '学霸', '考研', '留学'
    ],
    tabs: [{
      id: 0,
      name: "回答",
      isActive: true
    }, {
      id: 1,
      name: "作品",
      isActive: false
    }],
    activeIndex: true,
    statusBarHeight: 0,
    sorts: ['推荐', '实习', '转专业', '就业', '留学', '保研', '考研', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP'],
    showPopup: false, // 分类栏查看更多

    // 作品
    Info: [{
      title: '面试经验分享',
      nickName: 'ALKAO.UA',
      likes_num: 124,
      pic: '/images/pic1.jpg'
    }, {
      title: '面试经验分享、大厂实习转正经验分享',
      nickName: '子木仁一',
      likes_num: 25,
      pic: '/images/pic2.jpg'
    }, {
      title: '保研资格获取经验分享、考研经历分享',
      nickName: '深圳的冬天终于来了',
      likes_num: 1352,
      pic: '/images/pic3.jpg'
    }, {
      title: '面试经验分享、大厂实习转正经验分享',
      nickName: 'ALKAO.UA',
      likes_num: 124,
      pic: '/images/pic1.jpg'
    }, {
      title: '面试经验分享',
      nickName: '子木仁一',
      likes_num: 25,
      pic: '/images/pic2.jpg'
    }, {
      title: '保研资格获取经验分享、考研经历分享',
      nickName: '深圳的冬天终于来了',
      likes_num: 1352,
      pic: '/images/pic3.jpg'
    }, ],

    // 回答
    answerInfo: [{
        nickName: "追梦人",
        content: "我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生",
        agreeNum: 211,
        commentNum: 12,
        date: "2021-1-26"
      },
      {
        nickName: "追梦人",
        content: "我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生",
        agreeNum: 211,
        commentNum: 12,
        date: "2021-1-26"
      },
      {
        nickName: "追梦人",
        content: "我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生",
        agreeNum: 211,
        commentNum: 12,
        date: "2021-1-26"
      },
      {
        nickName: "追梦人",
        content: "我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生我算是深大cfa特色版的首批学生",
        agreeNum: 211,
        commentNum: 12,
        date: "2021-1-26"
      },
    ],

    // 经验
    exp: {
      level: 2,
      currentExp: 200,
      totalExp: 300,
      percent: 60
    },

    // 关注、粉丝、获赞
    userInfo: {
      follow_num: 100,
      fans_num: 200,
      likes_num: 300
    }
  },
  onLoad: function (options) {},

  handleItemTap(e) {
    const {
      index
    } = e.currentTarget.dataset;
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },

  // 切换列表
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },

  //登录 
  login() {
    wx.login({
      success(res) {
        console.log(res)
      },
    }),
    wx.getUserInfo({
      lang: "zh_CN",
      fail() {
        console.log("fail")
      }
    })
  },

  
})