// pages/personnel/orderDetails/selectDate/selectDate.js
import initDatepicker from '../../../common/calender/index';
import getSelectedDay from '../../../common/calender/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:null,
    startdate:null,
    enddate:null,
    tabFlag: "payDate",
    tabPara:null
  },
  dateTab:function(e){
    this.setData({
      tabFlag: e.currentTarget.id
    })
    console.log(e.currentTarget.id);
  },
  startDay:function(e){
    var self = this;
    initDatepicker();
    console.log(self);
    self.showDatepicker();
   // const { curYear, curMonth, days } = self.data.datepicker;
    self.setData({
      startDate: self.data.datepicker.selectedValue||"",
      flag: e.currentTarget.id
    });
    console.log(e);
  },
  endDay:function(e){
    var self = this;
    initDatepicker();
    console.log(self);
    self.showDatepicker();
    self.setData({
       flag: e.currentTarget.id
    })
    console.log(e);
  },
  confirm:function(){
    var self = this;
    let pages = getCurrentPages();
    let prePage = pages[pages.length-2];

    prePage.setData({
      startDate:self.data.startdate,
      endDate: self.data.enddate,
      dateType: self.data.tabFlag,
      filtered:true
    })
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    //   var self = this;
    //   self.setData({
    //     tabPara:options.para
    //   });
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