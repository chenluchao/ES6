// pages/calc/calc.js

var calculator = require("./calculator.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:0,
    buttons:[
      { title: "AC", className:'btn'},
      { title: "+/-", className: 'btn' },
      { title: "%", className: 'btn' },
      { title: "/", className: 'btn operate' },

      { title: "7", className: 'btn' },
      { title: "8", className: 'btn' },
      { title: "9", className: 'btn' },
      { title: "*", className: 'btn operate' },

      { title: "4", className: 'btn' },
      { title: "5", className: 'btn' },
      { title: "6", className: 'btn' },
      { title: "-", className: 'btn operate' },

      { title: "1", className: 'btn' },
      { title: "2", className: 'btn' },
      { title: "3", className: 'btn' },
      { title: "+", className: 'btn operate' },

      { title: "0", className: 'btn zero' },
      { title: ".", className: 'btn' },
      { title: "=", className: 'btn operate' },
    ]
  },

  dealClick(e){
    //console.log(e)
    var id = e.currentTarget.id
    console.log("id = "+id)

    var title = id;

    var info = this.data.info

    //处理数字
    if (title >= 0 && title<=9){
      //如果当前的数字是0, 下一个输入的是数字, 数字0去掉
      if(info == "0")
      {
        info = ""
      }
      info += title;
    }

    //处理+-*/
    if(title == "+"
      || title=="-"
      || title == "*"
      || title == "/"
      || title == "."){


        if(title != '.'){
          //如果以前info最后一个字符是数字, 才能加
          var lastChar = info.charAt(info.length - 1)
          if (lastChar >= 0 && lastChar <= 9) {
            info += title;
          }
        }else{
          //如果是. 判断表达式中最后一个数字字符串中没有点.
          var isFindPoint = false

          for(var i=info.length-1; i--; i>=0){
            var c = info[i];
            //console.log(c)

            if(c == "+" || c=="-" || c=="*" || c=='/'){
              break;
            }
            if(c == "."){
              isFindPoint = true;
              break;
            }
          }

          if (!isFindPoint){
            info += title;
          }
          
        }
        

        
     
      }

    //处理AC
    if(title == "AC"){
      info = "0"
    }

    //处理计算
    if(title == "="){

      //计算值, 转化为字符串
      var ruslt = calculator.calcExpression(info)+"";
      info = ruslt
    }

    //+/-
    if(title == "+/-"){
      var ruslt = -calculator.calcExpression(info) + "";
      info = ruslt
    }

    //%
    if (title == "%") {
      var ruslt = calculator.calcExpression(info)/100 + "";
      info = ruslt
    }

    this.setData({
      info:info
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