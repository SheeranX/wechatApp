// pages/index/buyTicket/addPerson/addPerson.js
let app = getApp();
let isPara = true;//用于判断是否带参跳转
let arrIdx = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardType:["身份证","护照","台湾通行证","港澳通行证"],
    index:0,
    personInfo:{
      username: '',
      idcard: '',
      cardNumber: "",
      phoneNum: '',
      itemId:null   
    },
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit:function(e){//提交表单
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if (e.detail.value.username == " " || e.detail.value.username=='')
     {
      wx.showToast({
        title: '姓名不能为空',
        icon:"none"
      })
      return
     }
    if (e.detail.value.cardNum == '' || e.detail.value.username == ' ')
   {
      wx.showToast({
        title: '证件号不能为空',
        icon: "none"
      })
      return
   }
    var self = this;
    var flag = true;//用于判断联系人是否已经存在

    
    //get the infomation from localstorage
   
    console.log(wx.getStorageSync(app.globalData.openid));
    let arr = wx.getStorageSync(app.globalData.openid);
  
    if (!isPara) {
      arr[arrIdx].username = e.detail.value.username;
      arr[arrIdx].idcard = e.detail.value.cardType;
      arr[arrIdx].cardNumber = e.detail.value.cardNum;
      arr[arrIdx].phoneNum = e.detail.value.mobile;
      console.log(arr);
      wx.setStorage({
        key: app.globalData.openid,
        data: arr,
        success: function () {
          wx.navigateBack({
            delta: 1
          })
        },
        fail: function () {
          console.log("local storage expectation");
        }
      })
    } else {
      //不带参跳转的时候需要注意上人数上限
      if (arr.length > 5) {
        wx.showToast({
          title: '已达到人数上限',
          icon: 'none'
        })
        return
      }
      for (let i = 0; i < arr.length-1; i++) {
        if (arr[i].cardNumber === e.detail.value.cardNum) {
          flag = false;
          break;
        }
        else
          flag = true;
      }
      if (flag) {
        //如果联系人不存在则进行存储
        self.setData({
          personInfo: {
            username: e.detail.value.username,
            idcard: e.detail.value.cardType,
            cardNumber: e.detail.value.cardNum,
            phoneNum: e.detail.value.mobile
          }
        })
        arr.push(this.data.personInfo);

        wx.setStorage({
          key: app.globalData.openid,
          data: arr,
          success: function () {
            wx.navigateBack({
              delta: 1
            })
          },
          fail: function () {
            console.log("local storage expectation");
          }
        })
      }
      else {
        wx.showToast({
          title: '联系人已存在',
          icon: "none"
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = [];
    var self = this;
    var username = "";
    var index = options.id;
    arrIdx = options.id;
    console.log(options);
    if (index != null && index != undefined)
    {
      isPara = false;
      arr = wx.getStorageSync(app.globalData.openid);
      self.setData({
        personInfo: {
          username: arr[index].username,
          idcard: arr[index].idcard,
          cardNumber: arr[index].cardNumber,
          phoneNum: arr[index].phoneNum
        }
      })
      console.log(arr);
      console.log(self.data.personInfo);
    }else{
      isPara = true;
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