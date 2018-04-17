// pages/salecenter/share/share.js
let img = null;
let flag=  true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:"../../../images/broadcast.png",
    imagesCode:"../../../images/code.jpg",
    maskHidden:true
  },
  setCanvasSize:function(){
    var size = {};
    try{
      var res = wx.getSystemInfoSync();
      var scale = 750;
      var scaleH=1200/750;
      var width = res.windowWidth;
      var height = res.windowWidth*scaleH;
      size.w = width;
      size.h = height;
    }catch(e){
      console.log("get info fail"+e);
    }
    return size;
  },
  settextFir:function(context){
    let that =this;
    var size = that.setCanvasSize();
    var textFir = "长按发送给朋友/长按识别小程序";
    //console.log(textFir);
    context.setFontSize(12);
    context.setTextAlign("center");
    context.fillText(textFir,size.w/2,size.h*0.75);
    context.stroke();
  },
  // settextSec:function(context){
  //   let that = this;
  //   var size = that.setCanvasSize();
  //   var textSec = "长按识别小程序";
  //   context.setFontSize(12);
  //   context.setTextAlign("center");
  //   context.fillText(textSec,size.w/2,size.h*0.70);
  //   context.stroke();
  // },
  createNewImg:function(){
    var that = this;
    var size = that.setCanvasSize();
    var context = wx.createCanvasContext('myCanvas');
    var path = that.data.imagePath;
    var imageCode = that.data.imagesCode;
   if(flag)
   {
     context.drawImage(path, 0, 0, size.w, size.h);
     context.drawImage(imageCode, size.w / 2 - 45, size.h * 0.55, size.w * 0.25, size.w * 0.2);
     this.settextFir(context);
     // this.settextSec(context);
     context.draw();

     wx.showToast({
       title: '生成中...',
       icon: "loading",
       duration: 2000
     })

     setTimeout(function () {
       wx.canvasToTempFilePath({
         canvasId: 'myCanvas',
         success: function (res) {
           var temp = res.tempFilePath;
           that.setData({
             imagePath: temp,
             canvasHidden: false,
             maskHidden: true
           });
           img = that.data.imagePath;
           wx.previewImage({
             current: img,
             urls: [img],
           })
           that.setData({
             flag: false
           });
         },
         fail: function (res) {
           console.log(res);
         }
       });
     }, 2000);
     flag = false;
   }else
   {
     wx.previewImage({
       current: img,
       urls: [img],
     })
   }
  },
  saveImg: function () { 
    wx.showActionSheet({
      itemList: ['发送给朋友', '保存图片'],
      success: function (res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0){

        }
        if (res.tapIndex == 1) {
          wx.getImageInfo({
            src: '../../../images/broadcast.png',
            success: function (ret) {
              var path = ret.path;
              wx.saveImageToPhotosAlbum({
                filePath: path,
                success(result) {
                 wx.showToast({
                   title: '已保存',
                 })
                }
              })
            }
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
    console.log("_____");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var size = this.setCanvasSize();//动态设置画布大小
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