// pages/index/detail/detail.js
Page({
  data: {
    imageUrls:[
      '/images/pic1.jpg','/images/pic2.jpg','/images/pic3.jpg'
    ],
    name: '子木仁一',
    title: '这个是主题/标题',
    content: '这个地方是文本内容哦，可以在这里写东西，想写什么写什么~~',
    comments: [
      {
        name: '张三', comment: '很不错，值得推荐'
      },
      {
        name: '李四', comment: '很棒，能学到东西'
      },
      {
        name: '王五', comment: '很优秀的一位学长，太棒了，讲授也很耐心，也能帮我圈出重点'
      }
    ],
    comment_num: 3,
    collect_num: 32,
    like_num: 124
  },
  onLoad: function (options) {
    
  },
  onShareAppMessage: function () {

  }
})