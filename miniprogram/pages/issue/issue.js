// pages/issue/issue.js
Page({
  data: {
    info: {
      title: '',
      content: '',
      uploadImgs: []
    }
  },
  onLoad: function (options) {

  },
  // 标题
  getTitle(e){
    this.setData({
      ['info.title']: e.detail.value
    })
  },
  // 内容
  getContent(e){
    this.setData({
      ['info.content']: e.detail.value
    })
  },
  // 上传照片
  upload: function(){
    let that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success (res) {
        that.setData({
          upload_ok: true,
          ['info.uploadImgs']: that.data.info.uploadImgs.concat(res.tempFilePaths)
        })
      }
    })
  },
  // 内容发布
  issue(){
    let info = this.data.info
    if (!info.title.length) {
      wx.showToast({
        title: '标题不能为空',
        icon: 'none'
      })
      return
    }
    if (!info.content.length) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
      return
    }
    if (!info.uploadImgs.length) {
      wx.showToast({
        title: '图片至少包含一张',
        icon: 'none'
      })
      return
    }
    wx.showToast({
      title: '已提交审核',
    })
  }
})