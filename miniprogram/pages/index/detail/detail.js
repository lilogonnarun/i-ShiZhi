// pages/index/detail/detail.js
Page({
  data: {
    id:"2",
    imageUrls:[
      '/images/pic1.jpg','/images/pic2.jpg','/images/pic3.jpg'
    ],
    authorName: '子木仁一',
    authorAvatar:'/images/person.png',
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
    comment: "这完全是一条模板评论",
    showComments: false,
    /*TODO: 获取用户openid */
    openId: "12312"
  },

  /*初始化加载 */
  onLoad: function (options) {
    /*获取内容 */
    var openId="12312";
    var id="2";
    let that =this;
    let o=options;

    o.img1=decodeURIComponent(o.img1)
    o.img2=decodeURIComponent(o.img2)
    o.img3=decodeURIComponent(o.img3)
    o.img4=decodeURIComponent(o.img4)
    o.img5=decodeURIComponent(o.img5)
    o.img6=decodeURIComponent(o.img6)
    o.img7=decodeURIComponent(o.img7)
    o.img8=decodeURIComponent(o.img8)
    o.img9=decodeURIComponent(o.img9)

    if(o.authorAvatar != "null"){that.setData({ authorAvatar:o.authorAvatar})}
    if(o.authorName != "null"){that.setData({authorName:o.authorName})}
    if(o.title!= "null"){that.setData({title:o.title})}
    if(o.content!="null"){that.setData({content:o.content})}
    if(o.comments!="null"){that.setData({comment_num:o.comments})}
    if(o.collects!="null"){that.setData({collect_num:o.collects})}
    if(o.likes!="null"){that.setData({like_num:o.likes})}
    if(o.id!="null"){that.setData({id:o.id})}
    if(o.openId!=null){that.setData({openId:o.openId})}
    that.setData({
      imageUrls:[o.img1,o.img2,o.img3,o.img4,o.img5,o.img6,o.img7,o.img8,o.img9],
    })
   
      console.log()
      /*获取评论 */
      wx.request({
        url: 'http://java.maozj.site:8080/api/main/get-comments',
        data: {
          id: id,
          openId: openId
        },
        
        headers: {
          'content-type': 'application/json' // 默认值
        },
        method: 'GET',
        success: res => {
          this.setData({comments: res.data.content})
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