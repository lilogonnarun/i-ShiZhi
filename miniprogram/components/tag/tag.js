// components/tag/tag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: String,
      value: ""
    },
    selected: {
      type: Boolean,
      value: false
    },
    // 是否需要打勾标签
    needCheckIcon: {
      type: Boolean,
      value: true
    },
    // 类型：[choose | add]
    type: {
      type: String,
      value: "choose"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
