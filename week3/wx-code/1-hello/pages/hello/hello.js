// pages/hello/hello.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:10,
    name:"lisi",
    list1:['a','c'],
    dog:{
      name:"tiantian",
      age:3
    },

    isShow:false,

    num1:1,
    num2:2
  },

  dealChange1(e){
    console.log(e)
    this.setData({
      num1:e.detail.value
    })
  },
  dealChange2(e) {
    this.setData({
      num2: e.detail.value
    })
  },

  dealCalc(){
    console.log("num1="+this.data.num1)
    console.log("num1=" + this.data.num2)
  },

  dealAdd(){
    var newNum = this.data.num+1
    //console.log(this.data.num)
    this.setData({
      num:newNum
    })
  },

  dealClick(){
    console.log("dealClick")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
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