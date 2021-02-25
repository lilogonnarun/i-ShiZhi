// components/businessCard/index.js
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
    card_list:[
      {
        id:0,
        name:"jimmy",
        introduction:"国内头部券商工作",
        availableTime:"未指定",
        specialty:["跨专业考研金融","8个月冲刺上财","背景提升"],
        appointFee:0,
        appointMinute:120,
        score:4.75
      },
      {
        id:1,
        name:"张三",
        introduction:"国内头部券商工作",
        availableTime:"周一晚8：00 - 10：00",
        specialty:["跨专业考研金融","8个月冲刺上财","背景提升","跨专业考研金融","8个月冲刺上财","背景提升"],
        appointFee:100,
        appointMinute:2000,
        score:5
      },
      {
        id:2,
        name:"jimmy",
        introduction:"国内头部券商工作，介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍",
        availableTime:"周一晚8：00 - 10：00,周二晚8：00 - 10：00,周六晚8：00 - 10：00,周日晚8：00 - 10：00",
        specialty:["跨专业考研金融"],
        appointFee:0,
        appointMinute:120,
        score:4.75
      },
      {
        id:3,
        name:"iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        introduction:"国内头部券商工作",
        availableTime:"未指定",
        specialty:["跨专业考研金融","8个月冲刺上财","背景提升"],
        appointFee:1000,
        appointMinute:6666,
        score:4.75
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
