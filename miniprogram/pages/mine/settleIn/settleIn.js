// pages/mine/settleIn/settleIn.js
Page({
  data: {
    // 用户来源
    origin: {
      szu: true,
      staff: false,
      other: false
    },
    // 擅长领域
    field: {

    },
    // 个人信息()
    presData: {
      name: "",
      weChatNumber: "",
      fee: "",
      spareTime: "",
      description: "",
      masterTopics: [
        {
          masterTopic: "",
          ad: ""
        },
           
      ]
    }
  },
  onLoad: function (options) {

  },
  
  // 跳转认证界面
  gotoAttestation() {
    wx.navigateTo({
      url: '../attestation/attestation',
    })
  },

  // 选中tag
  choose(e) {
    let id = e.target.id
    let tempObject = 'origin.' + id
    // 去重
    for(let key in this.data.origin) {
      let tempObject = 'origin.' + key
      this.setData({
        [tempObject]: false
      })
    }
    // 选中
    this.setData({
      [tempObject]: !this.data.origin[id]
    })
  }


})