// pages/index/ticketDetails/ticketDetails.js
let app = getApp()
//var WxParse = require('../../common/wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbar: app.globalData.tarbar,
    currentTab: 0,
    root:'../../..',
    rootPage: '../..',
    article:'',
    item:[
      {title:"上海海湾国家森林公园成人票",price:65,disc:100,bouns:45},
      { title: "上海海湾国家森林公园亲子票", price: 65, disc: 100, bouns: 45 },
      { title: "上海海湾国家森林公园老人票", price: 65, disc: 100, bouns: 45 },
      { title: "学生票", price: 65, disc: 100, bouns: 45 }
    ],
    tabItem:["购票","预定须知","景点介绍","交通指南"],
    currentTicketTab:0,
    showShare:false
  },
  goLocation:function(){
    var self = this;
    wx.openLocation({
      latitude: 30.873081,
      longitude: 121.685524,
      scale: 15,
      name: '上海海湾国家森林公园',
      address: '上海市奉贤区海湾镇随塘河路1677号'
    })  
  },
  clickTab:function(e){
    this.setData({
      currentTicketTab: e.currentTarget.dataset.idx
    })
  },
  bookNow:function(){
    wx.navigateTo({
      url: '../buyTicket/buyTicket',
    })
  },
  clickScreen:function(){
    this.setData(
      {
        showShare:false
      }
    );
  },
  share:function(){
    this.setData(
      {
        showShare: true
      }
    );
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var self = this;
    // self.setData({
    //   article: '<h1>我是H1标签</h1><p>我是一段文字</p><p><br/></p><p><span style="color:#E53333;" > 我是红色的文字 </span></p>'
    // });
    // WxParse.wxParse('article','html',self.data.article,self,5);

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
  
  },
  navbarTap:function(e){
    console.log(e);
  }
})