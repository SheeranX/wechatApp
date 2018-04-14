//app.js

App({
  onLaunch: function () {
    var self = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code)
        {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data:{
              appid:'wx30787e3830f20709',
              secret: "0822c74419ff64390c29d6f9490791bd",
              grant_type:'authorization_code',
              js_code:res.code
            },
            method:'GET',
            header:{'content-type':'application/json'},
            success: function (openIdRes){
              console.log("login success"+openIdRes.data.openid);
              if(openIdRes.data.openid!=null&&openIdRes.data.openid!=undefined)
              {
                self.globalData.openid = openIdRes.data.openid; 
                // 展示本地存储能力
                var userinfo = wx.getStorageSync(self.globalData.openid) || []
                logs.unshift(Date.now())
                wx.setStorageSync(self.globalData.openid, userinfo)
                // 获取用户信息
                wx.getSetting({
                  success: res => {
                    if (res.authSetting['scope.userInfo']) {
                      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                      wx.getUserInfo({
                        success: res => {
                          // 可以将 res 发送给后台解码出 unionId
                          this.globalData.userInfo = res.userInfo

                          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                          // 所以此处加入 callback 以防止这种情况
                          if (this.userInfoReadyCallback) {
                            this.userInfoReadyCallback(res)
                          }
                        }
                      })
                    }
                  }
                })
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    tarbar:[{"id":"index","name":"首页","icon":"index_icon"},
            {"id":"order","name":"订单","icon":"order_icon"},
            {"id":"service", "name": "客服", "icon": "service_icon" },
            {"id":"personnel","name": "我的", "icon": "person_icon" }
            ],
    openid: null,
    hasLogin: false
  }
})