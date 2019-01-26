// page/hello_test/hello.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:10,
    list:['a','b','c'],
    dog:{
      name:"dog",
      age:"5",
    },

    show: false,
    num1:1,
    num2:2
  },
  dealchange1(e){
   // console.log(e)
    this.setData({
      num1:e.detail.value
    })
  },
  dealchange2(e){
    this.setData({
      num2:e.detail.value
    })
  },
  dealcalc(){
    console.log("num1="+this.data.num1)
    console.log("num2=" + this.data.num2)
  },
  dealAdd:function(){
    var newnum=this.data.num+1;
    this.setData({
      num:newnum
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