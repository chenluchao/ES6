var api = require("../../request/api.js")



// pages/citySelect/citySelect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    //全部城市
    cts:[],

    //分组数据
    /*
    [
      {
        title:"A",
        list:[
          {
            nm:"阿拉善"
          },{
            nm:"安阳"
          }
        ]
      },

      {
        title:"B",
        list:[
          {
            nm:"北京"
          },{
            nm:"白银"
          }

        ]
      }
    ]
    
    */
    group:[],

    //热门城市
    hot:[],

    //最近访问
    history:[],

    //定位
    location:{},

    scrollId:"location",

    //0 - 没有开始定位
    //1 - 开始定位
    //2 - 定位成功
    //3 - 定位失败
    locationStatus:1,
    locationCity:{}
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.downloadData()

    var self = this

    

  },

  startLocation(){
    var self = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy

        console.log("longitude=" + longitude + " latitude=" + latitude)

        self.getCurrentCity(longitude, latitude)
      },
      fail(){
        self.setData({
          locationStatus:3
        })
      }
    })
  },

  getCurrentCity(longitude, latitude){
    //http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=40.1445387,116.28328359999999&output=json&pois=0

    var self = this

    var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=" + latitude + "," + longitude+"&output=json&pois=0"
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        //数据格式:   renderReverse&&renderReverse(对象)
        var str = res.data.substring("renderReverse&&renderReverse(".length, res.data.length-1)
        //console.log(str)
        var dict = JSON.parse(str)
        //console.log(dict)

        var cityName = dict.result.addressComponent.city
        console.log("定位的城市是" + cityName)

        //去掉最后的字符 市
        cityName = cityName.substring(0,cityName.length-1)
        console.log("cityName=" + cityName)

        //用城市名在, cts 数组查找对象
        var findCity = null
        console.log("self.data.cts.length=" + self.data.cts.length)
        for (var i = 0; i < self.data.cts.length; i++) {
          var city = self.data.cts[i]

          if (city.nm == cityName) {
            findCity = city
            break;
          }
        }
        console.log("findCity=")
        console.log(findCity)

        self.setData({
          locationStatus:2,
          locationCity:findCity
        })

      },
      fail(){
        self.setData({
          locationStatus: 3
        })
      }
    })


  },

  dealSelectCity(e){
    var item = e.currentTarget.dataset.item
    console.log(item)

    //存储数据
    //类似 localStorage.setItem(key,value)
    wx.setStorageSync("Maoyan_selectCity",item)

    wx.navigateBack({
      delta: 1
    })
  },

  dealNav(e){
    var id = e.currentTarget.dataset.id
    console.log(id)
    
    this.setData({
      scrollId:id
    })
  },

  downloadData(){

    var self = this
    
    var url = api.cityListUrl
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        self.setData({
          cts: res.data.cts,
          hot: res.data.hot
        })

        //处理城市分组
        self.dealCityGrouping()

        //开始定位
        self.startLocation()
      }
    })

  },

  dealCityGrouping: function(){

    var group = []

    //A ~ Z
    for(var i=0; i<26; i++){
      //console.log("")
      var b = String.fromCharCode(65+i).toString()
      var s = String.fromCharCode(97 + i).toString()
      //console.log(b)

      group.push({
        b:b,
        s:s,
        list:[]
      })

      


    }

    //遍历每个城市, 提取出每个城市拼音的第一个字符, 归类的当前数组中
    var cts = this.data.cts
    for (var i = 0; i < cts.length; i++){
      var item = cts[i]
      var f = item.py.charAt(0);
      

      //根据第一个字符计算, 对应的数组的序号
      //  a 0     0=97-97
      //  b 1     1=98-97
      //  c 2
      var index = f.charCodeAt(0) - 97
      //console.log("f ="+f+" index="+index)


      group[index].list.push(item)
      
    }
    //console.log(group)

    this.setData({
      group: group
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