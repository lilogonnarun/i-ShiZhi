// pages/index/detail/detail.js
Page({
  data: {
    /*-------------------------------------------------------------------------------可以删除*/
    imageUrls: [],
    name: '子木仁一',
    title: '这个是主题/标题',
    content: '这个地方是文本内容哦，可以在这里写东西，想写什么写什么~~',
    comments: [{
        name: '张三',
        comment: '很不错，值得推荐'
      },
      {
        name: '李四',
        comment: '很棒，能学到东西'
      },
      {
        name: '王五',
        comment: '很优秀的一位学长，太棒了，讲授也很耐心，也能帮我圈出重点'
      }
    ],
    comment_num: 3,
    collect_num: 32,
    like_num: 124,
    /*----------------------------------------------------------------------------------------*/
    comment: "这完全是一条模板评论",
    showComments: false,
    contents: [],
    /*TODO: 获取用户openid */
    openId: "12312",

  },

  /*初始化加载 */
  onLoad: function (options) {
    var contents=""
    /*获取内容 */
    console.log("获取内容");
    console.log(options.detail)
    contents = options.detail
    console.log(contents);
      /*获取评论 */
      wx.request({
        url: 'http://java.maozj.site:8080/api/main/get-comments',
        data: {
          id: "2",
          openId: "12312"
        },
        headers: {
          'content-type': 'application/json' // 默认值
        },
        method: 'GET',
        success: res => {
          console.log("获取评论")
          console.log(res);
          contents: res.data
        },
      })
    },
    /*获取关注关系 */
    /* 
      wx.request({
      url: 'http://java.maozj.site:8080/api/main/get-comments',
      data: {
        openId1: "00000",
        openId2: "12312"
      },
      headers: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: res => {
        console.log("获取关注关系")
        console.log(res);
        contents: res.data
      },
    })
 
    */
    

  /*绑定函数*/
  addComment: function (comment_content) {
    this.setData({
      showComments: true
    })
    wx.request({
      url: 'http://java.maozj.site:8080/api/main/post-record',
      method: 'POST',
      data: {
        /*接口*/
        content: "这完全是一条模板评论",
        id: "2",
        openId: "456456",
        type: "1"
      },
      success(res) {
        console.log("评论成功！")
        console.log(res)
      }
    })
  },
  addCollect: function () {
    wx.request({
      url: 'http://java.maozj.site:8080/api/main/post-record',
      method: 'POST',
      data: {
        content: "",
        id: "2",
        openId: "456456",
        type: "3"
      },
      success(res) {
        console.log("添加到收藏！")
        console.log(res)
      }
    })
  },
  addLike: function () {
    wx.request({
      url: 'http://java.maozj.site:8080/api/main/post-record',
      method: 'POST',
      data: {
        content: "",
        id: "2",
        openId: "456456",
        type: "4"
      },
      success(res) {
        console.log("已点赞！")
        console.log(res)
      }
    })
  },
  // 关闭弹出层
  closeComments() {
    this.setData({
      showComments: false
    })
  },
})