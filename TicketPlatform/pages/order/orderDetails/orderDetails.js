// pages/order/orderDetails/orderDetails.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: app.globalData.tarbar,
    currentTab: 1,
    root: '../../..',
    rootPage: '../..',
    goods: {
      "id": "123658475",
      "status": '未支付',
      "imgUrl": "moutain.jpg",
      "name": "上海国家森林公园",
      "date": "2018-02-02 12:00:00",
      "item": [
        { ticketTitle: "亲子票", startDate: '2018-05-05 12:00', endDate: '2018-07-01 12:00', quantity: 1, price: 240 },
        { ticketTitle: "成人票", startDate: '2018-05-05 12:00', endDate: '2018-07-01 12:00', quantity: 2, price: 120 },
        { ticketTitle: "儿童票", startDate: '2018-05-05 12:00', endDate: '2018-07-01 12:00', quantity: 4, price: 40 }
      ]
    },
    orderID:''
  },
  cancelOrder:function(){
      wx.showModal({
        title: '',
        content: '确认取消订单？',
        success:function(res){
          if(res.confirm){
            console.log("已取消");
          }else if(res.cancel)
            console.log("未取消");
        },
        cancelColor:"#00a09a",
        confirmColor:"#00a09a"
      })
  },
  goPay:function(){
    wx.navigateTo({
        url: '../pay/pay?id=15105758563',
        success:function(res){
          console.log('lets go');
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.details);
    this.setData({
      orderID: options.details
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