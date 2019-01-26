var calculator = require('./calculator.js')
// page/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:0,
    buttons:[
      {title:"AC",classname:"btn"},
      {title:"+/-",classname:"btn"},
			{title:"%",classname:"btn"},
      {title:"/",classname:"btn operate"},
      
      {title:"7",classname:"btn"},
      { title: "8", classname: "btn" },
			{title:"9",classname:"btn"},
			{title:"*",classname:"btn operate"},
			
			{title:"4",classname:"btn"},
			{title:"5",classname:"btn"},
			{title:"6",classname:"btn"},
			{title:"-",classname:"btn operate"},
			
			{title:"1",classname:"btn"},
			{title:"2",classname:"btn"},
			{title:"3",classname:"btn"},
			{title:"+",classname:"btn operate"},
			
			{title:"0",classname:"btn zero"},
			{title:".",classname:"btn"},
			{title:"=",classname:"btn operate"},
    ]
  },
	dealclick(e){
		//console.log(e)
		var id = e.currentTarget.id
		//console.log(id)
		var title = id;
		var info=this.data.info;
		if(title>=0 && title<=9){
			if(info=="0"){
				info="";
			}
			info += title;
		}
		if(title == "+" || title == "-" || title == "*" || title == "/" || title == "."){
			if(title!="."){
				//如果最后一个数字是数字可以加减如果不是数字则不能加减
				var lastChar = info.charAt(info.length-1)
				if(lastChar>=0 && lastChar<=9){
					info+=title
				}
			}else{
				var isFindPoint=false
				for(var i=info.length-1;i--;i>=0){
					var c = info[i];
					if(c=="+" || c=="+" || c=="*" || c=="/"){
						break;
					}
					if(c=="."){
						isFindPoint=true
						break;
					}
				}
				if(!isFindPoint){
					info+=title;
				}
			}
			
		}
		//AC
		if(title=="AC"){
			info=0
		}
		
		if(title=="="){
			var ruslt = calculator.calcExpression(info)+"";
			info=ruslt
		}
		if(title=="+/-"){
			var ruslt = -calculator.calcExpression(info)+"";
			info=ruslt
		}
		if(title=="%"){
			var ruslt = calculator.calcExpression(info)/100+"";
			info=ruslt
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