
var requestHandler =  {
  url:"",
  params:{},
  success:function(res){
    //Todo
  },
  fail:function(res){
    //Todo
  }

}

function GET(requestHandler){
  request('GET', requestHandler);
}

function POST(requestHandler){
  request('POST', requestHandler);
}

function request(method, requestHandler){
  var params = requestHandler.params;
  var url = requestHandler.url;
  wx.request({
    url: url,
    data:params,
    method:method,
    header:{
      'Content-Type': 'application/json'
    },
    success:function(res){
      requestHandler.success(res);
    },
    fail:function(res){
      requestHandler.fail(res);
    }
  })
}

module.exports={
  GET:GET,
  POST:POST
}