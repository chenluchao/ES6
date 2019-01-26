var api = require("../../request/api.js")


// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:"",

    movies:[],
    cinemas:[]
  },

  dealChange(e){
    console.log(e)
    var keyword = e.detail.value
  
    this.setData({
      keyword: keyword
    })

    var self = this
    var url = api.searchUrl

    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: {
        kw: self.data.keyword,
        stype: -1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        var moviesList = res.data.movies.list
        for (var item of moviesList) {
          item.img = item.img.replace("w.h", "128.180")
        }

        var cinemasList = res.data.cinemas.list
        // for (var item of cinemasList) {
        //   item.img = item.img.replace("w.h", "128.180")
        // }

        self.setData({
          movies: moviesList,
          cinemas: cinemasList
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})