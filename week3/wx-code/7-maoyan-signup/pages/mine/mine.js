// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    dealLogout() {

		wx.removeStorageSync('Maoyan_isLogin')
		wx.removeStorageSync('Maoyan_user')

		wx.switchTab({
			url: "/pages/movie/movie"
		})

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

        //检查是否登录
        //  Maoyan_isLogin==1
        //  Maoyan_user

        var isLogin = wx.getStorageSync("Maoyan_isLogin")

        if (!isLogin) {

            wx.showModal({
                title: '提示',
                content: '您还没有登录, 是否跳转到登录界面?',
                success(res) {
                    if (res.confirm) {
                        console.log('确定')

                        wx.navigateTo({
                            url: '/pages/login2/mine'
                        })

                    } else if (res.cancel) {
                        console.log('取消')

                        wx.switchTab({
                            url: '/pages/movie/movie'
                        })
                    }
                }
            })

            return
        }

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})