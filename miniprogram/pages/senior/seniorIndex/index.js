// pages/senior/seniorIndex/index.js
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
    name:"未命名",
    introduction:"未填写",
    avaliableTime:"未指定",
    specialty:[{title:"跨专业考研金融",content:"Xxxxxxxxxxxxxxxxxx"},
    {title:"8个月冲刺上财",content:"xxxxxxxxxxxxxx"},
    {title:"背景提升",content:"xxxxxxxxxxx"}],
    comments:[
      {avatar:"/images/person.png",name:"tommy",Qualified:true,comment:"非常值得一看，感谢分享！！！",likeNum:5},
      {avatar:"/images/person.png",name:"tommy",Qualified:false,comment:"非常值得一看，感谢分享！！！",likeNum:6},
    ],
    appointFee:"100",
    appointMinute:"1000",
    score:"5",
    specialtyArea:['实习','考研'],
    commentNum:2
  },
  onLoad:function(options){
    console.log('onload')
    o=options;
    let that=this;
    //防空值
    that.setData({
        name:o.name,
        introduction:o.introduction,
        avaliableTime:o.avaliableTime,
        specialty:o.specialty,
        appointFee:o.appointFee,
        appointMinute:o.appointMinute,
        score:o.score
    })
  }

  
})
