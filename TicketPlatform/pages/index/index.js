//index.js
//获取应用实例
const app = getApp()
let inter = '';
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    animationData: {},
    tabbar: app.globalData.tarbar,
    currentTab: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 1500,
    duration: 500,
    circular: true,
    imgUrls: ["banner1.png", "banner2.png", "banner3.png", "banner4.png"],
    bannerLeft: 'banner_icon_left.png',
    bannerRight: 'banner_icon_right.png',
    ticketItem: [
      { imgUrl: 'nk.png', itemTitle: '上海湾国家森林公园', itemPrice: '65', itemDiscount: '100' },
      { imgUrl: 'nk.png', itemTitle: '迪士尼度假区', itemPrice: '64', itemDiscount: '100' },
      { imgUrl: 'nk.png', itemTitle: '上海欢乐谷', itemPrice: '63', itemDiscount: '100' },
      { imgUrl: 'nk.png', itemTitle: '长白山风景区', itemPrice: '62', itemDiscount: '100' },
      { imgUrl: 'nk.png', itemTitle: '长白山风景区', itemPrice: '62', itemDiscount: '100' }
    ],
    isShow: true,
    isVisiable:false,
    root:'../..',
    rootPage:'..'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goSpot:function(){
    wx.navigateTo({
      url: 'spot/spot',
    })
  },
  goSaleCenter:function(){
    wx.navigateTo({
      url: '../salecenter/salecenter',
    })
  },
  onLoad: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear'
    })
    this.animation = animation;

    this.setData({
      animationData: animation.export()
    })

    var n = 0;
    inter = setInterval(function () {
      ++n;
      this.animation.rotate(180 * (n)).step()
      this.setData({
        animationData: this.animation.export()
      })
      if (n > 10)
        n = 0
    }.bind(this), 500)
  },
  getUserInfo: function (e) {
    // console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
  },
  searchScrollLower: function () {
    console.log('hello');
  },
  topLoad: function () {
    console.log("to top");
  },
  scroll: function () {
    console.log('scroll');
  },
  onReachBottom: function () {
    var self = this;
    self.setData({
       isShow: false,
       isVisiable:true
     })
     //发送网络请求，成功后显示隐藏
     wx.request({
       url: '',
       success:function(res){
          console.log(res);
       },
       fail:function(e){
         console.log("fail");
       }
     })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 1000)
  },
  onShow: function () {
  },
  onShareAppMessage:function(){
    return {
      title: 'Demo',
      desc: '票在旅途',
      path: '/page/user?id=123'
    }
  }
})