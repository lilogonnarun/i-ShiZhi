// pages/issue/issue.js
Page({
  data: {
    info: {
      title: '',
      content: '',
      uploadImgs: [],
    }
    ,
    tags: [
      //对应
      //修改顺序
      { tag: "#深大校内", chosen: false },
      { tag: "#热门行业", chosen: false },
      { tag: "#求职准备", chosen: false },
      { tag: "#升学深造", chosen: false },
      { tag: "#趣味分享", chosen: false },
      { tag: "#资源机会", chosen: false },
      { tag: "#实践提升", chosen: false },
      { tag: "#资讯科普", chosen: false },
      { tag: "#其他", chosen: false }
    ],
    sorts: [],
    openId: "12312"
  },
  onLoad: function (options) {

  },
  // 标题
  getTitle(e) {
    this.setData({
      ['info.title']: e.detail.value
    })
  },
  // 内容
  getContent(e) {
    this.setData({
      ['info.content']: e.detail.value
    })
  },
  // 上传照片
  upload: function () {
    let that = this
    wx.chooseImage({
      count: 9,
      sizesorts: ['original', 'compressed'],
      sourcesorts: ['album'],
      success(res) {
        that.setData({
          upload_ok: true,
          ['info.uploadImgs']: that.data.info.uploadImgs.concat(res.tempFilePaths)
        })
      }
    })


  },
  //点亮标签
  isChosen: function (e) {
    let that = this;
    console.log(e.currentTarget.dataset)
    var index = e.currentTarget.dataset.index;
    var bol = !e.currentTarget.dataset.chosen; // 获取状态
    var Tags=this.data.tags;
    console.log(index, bol)
    console.log(this.data.tags)
    Tags[index].chosen = bol;
    that.setData({
      tags:Tags
    })
  },
  // 内容发布
  issue() {
    let info = this.data.info
    var img1 = "", img2 = "", img3 = "", img4 = "", img5 = "", img6 = "", img7 = "", img8 = "", img9 = "";
    var path='images/weixin.png';
    img1 = info.uploadImgs[0];
    img2 = info.uploadImgs[1];
    img3 = info.uploadImgs[2];
    img4 = info.uploadImgs[3];
    img5 = info.uploadImgs[4];
    img6 = info.uploadImgs[5];
    img7 = info.uploadImgs[6];
    img8 = info.uploadImgs[7];
    img9 = info.uploadImgs[8];

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
    console.log(info)
    
    wx.request({
      url: 'http://java.maozj.site:8080/api/main/post-content',
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        amount: "",
        content: this.data.info.content,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,
        img7: img7,
        img8: img8,
        img9: img9,
        openId: this.data.openId,
        sort: this.data.sorts,
        sub: "",
        time: "",
        title: this.data.info.title,
        type: "1",
        vid: ""
      },
      success: res => {
        console.log('issued !')
      },
    }),

    wx.uploadFile({
      url: "http://java.maozj.site:8080/api/main/upload", //app.ai_api.File.file
      filePath: path,  //文件路径  这里是mp3文件
      name: 'file',  //随意
      header: {
        'Content-Type': 'multipart/form-data',
        'Authorization': wx.getStorageSync("access_token"),  //如果需要token的话要传
      },
      formData: {
        method: 'POST'   //请求方式
      },
      success(res) {
        var data = JSON.parse(res.data)  // 坑2：与wx.request不同的是，upload返回的是字符串格式，需要字符串对象化
        console.log(data)
      }
    })
  }

})