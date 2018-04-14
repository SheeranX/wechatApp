// pages/personnel/orderDetails/orderDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:null
  },
  waitpay: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    console.log(this.data.currentTab);
  },
  waituse: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    console.log(this.data.currentTab);
  },
  history: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    console.log(this.data.currentTab);
  },
  selectDate:function(){
    wx.navigateTo({
      url: 'selectDate/selectDate',
    })
    console.log("---");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var self = this;
    switch(options.id)
    {
      case '1':
        self.setData({
          currentTab:1
        })
        break;
        case '2':
          self.setData({
            currentTab:2
          })
          break;
        case '3':
          self.setData({
            currentTab:3
          })
          break;
    }
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