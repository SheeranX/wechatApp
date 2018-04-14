// pages/order/pay/pay.js
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    clock:"",
    flag:false,
    currentTabId:'wechat',
    orderID:''
  },
  selectItem:function(e){
    console.log(e);
    var self = this;
    switch (e.currentTarget.id){
      case "wechat":
        console.log("wechat")
        self.setData({
          currentTabId: 'wechat'
        })
        break;
      case "alipay":
        console.log("alipay");
        self.setData({
          currentTabId:'alipay'
        })
        break;
      case "bank":
        console.log("bank");
        self.setData({
          currentTabId: 'bank'
        })
        break;
  }
  },
  showDialog:function(){
    var self = this;
    if (self.data.isShow)
    {
      this.setData({
        isShow: false
      })
    }else
    {
      this.setData({
        isShow: true
      })
    }
   // console.log(self.data.isShow);
  },
  clickScreen:function(){
    this.setData({
      isShow: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      orderID:options.id
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
    // 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数
    var total_micro_second = 10 * 60 * 1000;
    /* 毫秒级倒计时 */
    function count_down(that) {
      // 渲染倒计时时钟
      that.setData({
        clock: util.date_format(total_micro_second)
      });

      if (total_micro_second <= 0) {
        that.setData({
          clock: "正在跳转...",
          flag: true
        });
        // timeout则跳出递归
        return;
      }
      setTimeout(function () {
        // 放在最后--
        total_micro_second -= 10;
        count_down(that);
      }, 10)
    }
    // util.date_format(this);
    var self = this;
    count_down(self)
    var timer = setInterval(function () {
      if (self.data.flag) {
        clearInterval(timer);
        total_micro_second = 10 * 60 * 1000;
        wx.navigateBack({
          delta: 1
        })
      }
    }, 1000);
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