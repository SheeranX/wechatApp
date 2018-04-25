// pages/order/order.js
var util = require('../../utils/util.js');
let app = getApp();
let arr = [false,false,false];
let arrNum = [false,false];
let inter = "";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbar: app.globalData.tarbar,
    currentTab: 1,
    root:'../..',
    rootPage:'..',
    phoneNum: '',
    messageCode: '',
    valiCode: '',
    isHide:true,
    getMsg:"发送动态码",
    disabled:false,
    phoneNumByID:'',
    valiCodeByID:'',
    queryByIDBtn:true
  },
  numberInput:function(e){
    var self = this;
    if (util.checkStr(e.detail.value))
      {
        self.setData({
          phoneNum: ''
        })
        arr[0] = false;
      }
      else
      {
      self.setData({
        phoneNum: e.detail.value
      })
         arr[0] = true;
      }
    if (arr[0] && arr[1] && arr[2])
      {
        self.setData({
          queryByOrderBtn:false
        })
      }
    else {
      self.setData({
        queryByOrderBtn: true
      })
    }
  },
  messageInput:function(e){
    var self = this;
    if (util.checkStr(e.detail.value))
    {
      self.setData({
        messageCode: ''
      })
      arr[1] = false;
    }else{
      self.setData({
        messageCode: e.detail.value
      })
      arr[1] =true;
    }
    if (arr[0] && arr[1] && arr[2])
      {
      self.setData({
        queryByOrderBtn: false
      })
      }
    else {
      self.setData({
        queryByOrderBtn: true
      })
    }
  },
  valiInput:function(e){
    var self = this;
    if (util.checkStr(e.detail.value))
    {
      self.setData({
        valiCode: ''
      })
      arr[2] = false;
    }else{
      self.setData({
        valiCode: e.detail.value
      })
      arr[2] = true;
    }
    if (arr[0] && arr[1] && arr[2])
      {
      self.setData({
        queryByOrderBtn: false
      })
      }
    else {
      self.setData({
        queryByOrderBtn: true
      })
    }
  },
  switchMobile:function(){
    var self = this;
    self.setData({
      isHide:true
    })
  },
  switchNum:function(){
    var self = this
    self.setData({
      isHide:false
    })
  },
  // 发送短信
  sendMessage:function(){
    var self = this;
    var time = 60;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;//验证手机格式
      if (!myreg.test(self.data.phoneNum))
    {
      wx.showToast({
        title: '手机号格式有误',
        icon:'none',
        duration:1500
      })
    }
    else
    {
        wx.showToast({
          title: '短信已发送',
          icon: 'success',
          duration: 1500,
          success: function () {
            inter = setInterval(function () {
              self.setData({
                getMsg: time + 's后重发',
                disabled: true
              })
              time--;
              if (time < 0) {
                clearInterval(inter)
                self.setData({
                  getMsg: '发送动态码',
                  disabled: false
                });
              }
            }, 1000)
          }
        })
    }    
  },
  formSubmit:function(e){
    var self = this;
    console.log("表单已提交");
    console.log(e.detail.value);
    //clearInterval(inter);
    if (arr[0] && arr[1] && arr[2])
    {
      wx.navigateTo({
        url: 'orderDetails/orderDetails?details=' + JSON.stringify(e.detail.value),
        success: function (res) {
          console.log(res);
          clearInterval(inter);
          self.setData({
            getMsg: '发送动态码',
            disabled: false
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }else
    {
      wx.showToast({
        title: '请输入正确信息',
        icon:'none'
      })
    }
  },
  inputByNumTab:function(e){
    var self = this;
    if (util.checkStr(e.detail.value)) {
      self.setData({
        phoneNumByID: ''
      })
      arrNum[0] = false;
    }
    else {
      self.setData({
        phoneNumByID: e.detail.value
      })
      arrNum[0] = true;
    }
    if (arrNum[0] && arrNum[1]) {
      self.setData({
        queryByIDBtn: false
      })
    }
    else {
      self.setData({
        queryByIDBtn: true
      })
    }
  },
  valiInputByNum:function(e){
    var self = this;
    if (util.checkStr(e.detail.value)) {
      self.setData({
        valiCodeByID: ''
      })
      arrNum[1] = false;
    }
    else{
      self.setData({
        valiCodeByID: e.detail.value
      })
      arrNum[1] = true;
    }
  },
  formSubmitById:function(){
   if(arrNum[0]&&arrNum[1])
     console.log("-----");
     else{
       wx.showToast({
         title: '请输入正确信息',
         duration: 1500,
         icon:'none'
       })
     }
  },
  // checkMobile:function(e){
  //   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
  //   var self = this;
  //   if (!myreg.test(e.detail.value))
  //   {
  //     wx.showToast({
  //       title: '手机号格式有误',
  //       icon:'none',
  //       duration:1500,
  //       success:function(){
  //         self.setData({
  //           disabled: true
  //         })
  //         console.log("blur")
  //       }
  //     })
  //   }
  //   else
  //   {
  //     self.setData({
  //       disabled: false
  //     })
  //   }    
  //  },
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
    return{
      title:'Demo',
      desc:'票在旅途',
      path:'/page/user?id=123'
    }
  }
})