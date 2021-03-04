// components/wxShare/index.js
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
    title:"Career Campus"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.title,    //自定义标题   string
      path: `/pages/index/index`  //这个地址需要把页面路径拼接的参数发送出去,直写页面地址的话，别人进入会是空的页面
    }
  },
  onShareTimeline: function(res){
    let img = this.data.path_image+this.data.shop.shop_img  //取得是每个店铺的图和店铺名称
    console.log(img)
    return {
      title: this.data.shop.name, //字符串  自定义标题
      query: `id=${this.data.shop.shop_id}`,  //页面携带参数
      imageUrl:img   //图片地址
    }
  },

  }
})
