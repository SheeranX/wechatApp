// pages/personnel/setting/changeNumber/changeNumber.js
var util = require('../../../../utils/util.js');
let inter = null;
let flag = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getMsg: "发送动态码",
    phoneNum: "",
    disabled: false,
    valiCodeByID: ''
  },
  sendMessage: function () {
    var self = this;
    var time = 60;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(self.data.phoneNum)) {
      wx.showToast({
        title: '手机号格式有误',
        icon: 'none',
        duration: 1500,
        success: function () {
          flag = false;
        }
      })
    }
    else {
      wx.showToast({
        title: '短信已发送',
        icon: 'success',
        duration: 1500,
        success: function () {
          flag = true
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
  numberInput: function (e) {
    var self = this;
    if (util.checkStr(e.detail.value)) {
      self.setData({
        phoneNum: ''
      })
    }
    else {
      self.setData({
        phoneNum: e.detail.value
      })
    }
  },
  messageInput: function (e) {
    var self = this;
    if (util.checkStr(e.detail.value)) {
      self.setData({
        messageCode: ''
      })
    } else {
      self.setData({
        messageCode: e.detail.value
      })
    }
  },
  formSubmit: function (e) {
    var self = this;
    var phoneNum = e.detail.value.mobileNumber;
    var code = e.detail.value.valiCode;
    console.log("表单已提交");
    console.log(e.detail.value);
    if (!util.checkStr(phoneNum) && !util.checkStr(phoneNum) && flag) {
      console.log("----");
      wx.showModal({
        title: '',
        content: '确定修改手机号？',
        confirmColor:"#00a09a",
        success: function (res) {
          if (res.confirm) {
           {
             wx.showToast({
               title: '修改成功',
               success:function(){
                 wx.navigateBack({
                   delta: 1
                 })
               }
             })
           }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      clearInterval(inter);
      self.setData({
        getMsg: '发送动态码',
        disabled: false
      });
    }
    else {
      // clearInterval(inter);
      wx.showToast({
        title: '请输入正确信息',
        icon: 'none'
      })
    }
  },
  inputByNumTab: function (e) {
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
  valiInputByNum: function (e) {
    var self = this;
    if (util.checkStr(e.detail.value)) {
      self.setData({
        valiCodeByID: ''
      })
      arrNum[1] = false;
    }
    else {
      self.setData({
        valiCodeByID: e.detail.value
      })
      arrNum[1] = true;
    }
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