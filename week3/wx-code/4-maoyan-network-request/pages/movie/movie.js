var api = require("../../request/api.js")

// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIndex:1,   //1,2

    movieOnInfoList:[],

    mostExperted:[],

    comingList:[]
  },

  dealChange(e){
    var tag = e.currentTarget
    var index = tag.dataset.index
    console.log(index)

    this.setData({
      showIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //console.log(api.movieOnInfoListUrl)

    var self = this

    var url = api.movieOnInfoListUrl
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        var list = res.data.movieList

        for(var item of list){
          item.img = item.img.replace("w.h","128.180")
        }

        self.setData({
          movieOnInfoList: list
        })
      }
    })

    /*
    var list = []
    for (var i = 1; i <= 20; i++) {
      list.push("正在上映电影" + i);
    }
    this.setData({
      movieOnInfoList: list
    })*/


    var list = []
    for (var i = 1; i <= 20; i++) {
      list.push("最受期待电影" + i);
    }
    this.setData({
      mostExperted: list
    })

    // var list = []
    // for (var i = 1; i <= 20; i++) {
    //   list.push("即将上映电影" + i);
    // }
    // this.setData({
    //   comingList: list
    // })

    var url = api.comingListUrl
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        var list = res.data.coming

        for (var item of list) {
          item.img = item.img.replace("w.h", "128.180")
        }

        self.setData({
          comingList: list
        })
      }
    })


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