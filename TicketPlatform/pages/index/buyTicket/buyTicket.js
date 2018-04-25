// pages/index/buyTicket/buyTicket.js
import initDatepicker from '../../common/datepicker/index';
let app = getApp();
let currentDay = new Date();
let currentMonth = currentDay.getMonth() + 1;
let currentDate = currentDay.getDate();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    reminder:false,
    inputValue:1,
    personInfo:[],
    currentitem:null,
    date:null,
    currentMonth: currentMonth,
    currentDate: currentDate,
    currentCard:3,
  },
  showDialog: function () {
    var self = this;
    if (self.data.isShow) {
      this.setData({
        isShow: false
      })
    } else {
      this.setData({
        isShow: true
      })
    }
  },
  clickScreen: function () {
    this.setData({
      isShow: false,
      reminder:false
    })
  },
  reminder:function(){
    var self = this;
    if (self.data.isShow) {
      this.setData({
        reminder: false
      })
    } else {
      this.setData({
        reminder: true
      })
    }
  },
  minus:function(e){
    var minus =  this.data.inputValue;
    if(minus<=1)
     return
    minus--;
    this.setData({
      inputValue:minus
    })
  },
  plus:function(){
    var plus = this.data.inputValue;
    plus++;
    this.setData({
      inputValue: plus
    })
  },
  addPerson:function(e){
    wx.navigateTo({
      url: 'addPerson/addPerson',
    })
  },
  removeClick:function(e){
      var self = this;
      let index = e.currentTarget.dataset.idx,
        nowToggle = self.data.personInfo[index].flag;
      self.setData({
        ['personInfo[' + index + '].flag']: !nowToggle,
        currentitem: e.currentTarget.dataset.idx
      })
  },
  removeItem:function(e){
    var index = e.currentTarget.dataset.idx;
    var self = this;
    var arr = self.data.personInfo;
    wx.showModal({
      title: '',
      content: '确定删除？',
      confirmColor:"#00b8c5",
      success: function (res) {
        if (res.confirm) {
          {
            if (arr.length > 0) {
              arr.splice(index, 1);
              self.setData({
                personInfo: arr
              })
              wx.setStorage({
                key: app.globalData.openid,
                data: arr,
                success: function () {
                  console.log('remove success');
                },
                fail: function () {
                  console.log("local storage expectation");
                }
              })
            }
          }
        } else if (res.cancel) {
           console.log('用户点击取消')
           return
        }
      }
    })
    
  },
  modify:function(e){
    wx.navigateTo({
      url: 'addPerson/addPerson?id=' + e.currentTarget.dataset.idx,
    })
    
  },
  showPicker:function(e){
    var self = this;
    let flag = e.currentTarget.id;
    switch(flag)
    {
      case "today":
        self.setData({
          currentCard:2
        })
        break;
      case "yesterday":
        self.setData({
          currentCard: 1
        })
       break;
      case "tomorrow":
        self.setData({
          currentCard: 3
        })
      break;
      case "future":
        self.setData({
          currentCard: 4
        })
        self.showDatepicker();
        break;
    }
    console.log(flag);
    console.log(self.data.currentCard);
   console.log(self);
  },
  goPay:function(){
    wx.navigateTo({
      url: '../../order/pay/pay?id=1234567',
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
    var self = this;
    initDatepicker();
    var arr = wx.getStorageSync(app.globalData.openid);
    if (arr.length>0)
    {
      arr.forEach(function (item) {
        item.flag = false
      })
      self.setData({
        personInfo: arr
      })
    }
   
    //console.log(self.data.personInfo);
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