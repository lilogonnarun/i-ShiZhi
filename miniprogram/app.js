//app.js
App({
  globalData: {},
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    let statusBarHeight = wx.getSystemInfoSync()['statusBarHeight']

    this.globalData = {
      statusBarHeight: statusBarHeight // 最顶部状态栏高度
    }

    // 获取openid并判断是否注册
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        this.globalData.openid = res.result.openid
        console.log(res.result.openid);
        wx.request({
          url: 'http://java.maozj.site:8080/api/main/verify',
          type: 'get',
          data: {
            openId: res.result.openid
          },
          success: result => {
            console.log(result)
            const {data: status} = result
            // 未注册
            // if(!status) {
            //   wx.navigateTo({
            //     url: '../mine/home/personal/personnal',
            //   })
            //   wx.showToast({
            //     title: '请先注册',
            //     duration: 1500,
            //     icon: "none"
            //   })
            // } 
          }
        })
      }
    })
  }
})