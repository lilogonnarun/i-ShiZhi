// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#bfbfbf",
        "selectedColor": "#075EAE",
        "list": [{
            "pagePath": "pages/index/index",
            "text": "首页",
            "iconPath": "images/index.png",
            "selectedIconPath": "images/index-active.png"
          },
          {
            "pagePath": "pages/sort/sort",
            "text": "分类",
            "iconPath": "images/sort.png",
            "selectedIconPath": "images/sort-active.png"
          },
          {
            "pagePath": "pages/publish/publish",
            "text": "发布",
            "iconPath": "images/publish.png",
            "selectedIconPath": "images/publish-active.png"
          },
          {
            "pagePath": "pages/order/order",
            "text": "订单",
            "iconPath": "images/order.png",
            "selectedIconPath": "images/order-active.png"
          },
          {
            "pagePath": "pages/mine/mine",
            "text": "我的",
            "iconPath": "images/mine.png",
            "selectedIconPath": "images/mine-active.png"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },
  
  /**
   * 组件的方法列表
   */
  methods: {

  }
})