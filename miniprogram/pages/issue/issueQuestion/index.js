// pages/issue/issueQuestion/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    info: {
      title: '',
      content: '',
    }
    ,
    openId:"123"
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    issue() {
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
      wx.showToast({
        title: '已提交审核',
      })
      console.log(info),
        wx.request({
          url: 'http://java.maozj.site:8080/api/main/post-content',
          method: 'POST',
          data: {
            amount: "",
            content: this.data.info.content,
            img1:"",
            img2:"",
            img3:"",
            img4:"",
            img5:"",
            img6:"",
            img7:"",
            img8:"",
            img9:"",
            openId:this.data.openId,
            sort: this.data.sorts,
            sub:"",
            time: "",
            title: this.data.info.title,
            type: "1",
            vid:""
          },
          success: res => {
            console.log('issued !')
          },
        })
    }
  }
})
