// pages/personal/personal.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myinfo: null,
    // 头像地址
    tempFilePaths: "",

    gender: "",
    userName: "",
    sign: "我的",
    intro: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var stu = wx.getStorageSync('student');
    this.setData({
      myinfo: stu
    });

    // 获取用户信息并绑定于input
    wx.request({
      url: 'http://java.maozj.site:8080/api/main/fetch',
      method: 'get',
      data: {
        openId: app.globalData.openid
      },
      success: res => {
        console.log("用户信息");
        console.log(res.data);
        const {
          userName,
          sign,
          intro,
          gender
        } = res.data;
        let tempGender = gender=="female" ? "1" : "2"
        this.setData({
          gender: tempGender,
          userName: userName,
          sign: sign,
          intro: intro,
        })
      }
    })
  },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  resetpwd: function (e) {
    var no = this.data.myinfo.no;
    // wx.navigateTo({
    //   url: '../password/password?no=' + no,
    // })
  },
  setemail: function (e) {
    var no = this.data.myinfo.no;
    // wx.navigateTo({
    //   url: '../email/email?no=' + no,
    // })
  },

  // 上传图片
  uploadAvatar: function () {
    wx.chooseImage({
      count: 1,
      success: res => {
        this.setData({
          tempFilePaths: res.tempFilePaths
        })
        wx.uploadFile({
          filePath: res.tempFilePaths[0],
          name: 'file',
          url: 'http://java.maozj.site:8080/api/main/upload',
          success: res => {
            console.log(res);
            
          }
        })
      }
    })
  },

  // 跳转入驻界面
  gotoSettled() {
    wx.navigateTo({
      url: '../../settleIn/settleIn',
    })
  },


  submit(e) {
    // console.log(e.detail.value);
    if(e.detail.value) {
      // var payload = {};
      var payload = e.detail.value;
      payload.openId = app.globalData.openid;
      console.log(payload);
    }
    wx.request({
      url: 'http://java.maozj.site:8080/api/main/sign-up',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: payload,
      success: res => {
        wx.switchTab({
          url: '../../../index/index',
        })
        wx.showToast({
          title: '保存成功',
        })
      }

    })
  }
})