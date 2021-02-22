// pages/senior/search/search.js
const app = getApp()
Page({
  data: {
    listEmpty: false,
    inputFocus: true,
    value: '', // 搜索框的内容
    showsearch: false, // 展示历史搜索
    listID: '', // 该用户的历史搜索记录在数据库中所属的列表_id
    hot_search: [] // 热门搜索列表
  },
  onLoad: function (e) {

  },
})