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
    specialty:['1','2','3'],
    appointFee:"100",
    appointMinute:"1000",
    score:"5"
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
