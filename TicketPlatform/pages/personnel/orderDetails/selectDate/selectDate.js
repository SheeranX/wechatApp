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
    enddate:null
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