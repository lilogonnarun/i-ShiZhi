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
        specialty:[{title:"跨专业考研金融",content:"Xxxxxxxxxxxxxxxxxx"},
        {title:"8个月冲刺上财",content:"xxxxxxxxxxxxxx"},
        {title:"背景提升",content:"xxxxxxxxxxx"}],
        appointFee:0,
        appointMinute:120,
        score:4.75
      },
      {
        id:1,
        name:"张三",
        introduction:"国内头部券商工作",
        availableTime:"周一晚8：00 - 10：00",
        specialty:[{title:"跨专业考研金融",content:"Xxxxxxxxxxxxxxxxxx"},
        {title:"8个月冲刺上财",content:"xxxxxxxxxxxxxx"},
        {title:"背景提升",content:"xxxxxxxxxxx"}],
        appointFee:100,
        appointMinute:2000,
        score:5
      },
      {
        id:2,
        name:"jimmy",
        introduction:"介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍",
        availableTime:"周一晚8：00 - 10：00",
        specialty:[{title:"跨专业考研金融"},
        {content:"xxxxxxxxxxxxxxxxx"}],
        appointFee:0,
        appointMinute:120,
        score:4.75
      },
      {
        id:3,
        name:"iiiiiiiiiiiiiiiiiii",
        introduction:"国内头部券商工作",
        availableTime:"未指定",
        specialty:[{title:"8个月冲刺上财",content:"xxxxxxxxxxxxxxxxxxx"}],
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
    goToDetail(e){
      const detail = e.currentTarget.dataset.detail;
      console.log(detail)
      wx.navigateTo({url:'/pages/senior/seniorIndex/index?name='+detail.name+'&introduction='+detail.introduction+'&avaliableTime='+detail.availableTime+'&specialty='+detail.specialty+'&appointFee='+detail.appointFee+'&appointMinute='+detail.appointMinute+'&score='+detail.score+''})
    }

  }
  
})
