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
  onShareAppMessage: function (options) {
    var that = this;
    var shareObj = {
      　　　　title: "转发的标题",        // 默认是小程序的名称(可以写slogan等)
      　　　　path: '/pages/share/share'        // 默认是当前页面，必须是以‘/’开头的完整路径
      // 　　　　imgUrl: '',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      // 　　　　success: function (res) {
      //   　　　　　　// 转发成功之后的回调
      //   　　　　　　if (res.errMsg == 'shareAppMessage:ok') {
      //   　　　　　　}
      // 　　　　},
      // 　　　　fail: function () {
      //   　　　　　　// 转发失败之后的回调
      //   　　　　　　if (res.errMsg == 'shareAppMessage:fail cancel') {
      //     　　　　　　　　// 用户取消转发
      //   　　　　　　} else if (res.errMsg == 'shareAppMessage:fail') {
      //     　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
      //   　　　　　　}
      // 　　　　},
      // 　　　　complete: fucntion(){
      //   　　　　　　// 转发结束之后的回调（转发成不成功都会执行）
      // 　　　　}
  　　}
    // 来自页面内的按钮的转发
    　　if (options.from == 'button') {
      　　　　var eData = options.target.dataset;
      　　　　console.log(eData.name);     // shareBtn
      　　　　// 此处可以修改 shareObj 中的内容
          shareObj.path = '/pages/ticketDetails/ticketDetails?btn_name=' + eData.name;
    　　}
    　　// 返回shareObj
    　　return shareObj;
  },
  navbarTap:function(e){
    console.log(e);
  }
})