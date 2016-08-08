! function(a, b) {
  
  b(a, !0)
  
var uid=0;
function jsonP(url, cs, callback_) {
    var cg = '';
    if (cs) for (var i in cs)  cg += '&' + i + '=' + cs[i];
        var callbackName = "mjsonp_cak" + uid++;
        var context, callback, sc = window[callbackName + "Element"] = document.createElement("script");
        window[callbackName] = function (data) {
            callback_.call(this, data);
        }
        sc.src = url + '?type=jsonp&callback=' + callbackName + cg;
        document.body.appendChild(sc);
}

jsonP('https://wxs.leanapp.cn/api/getjssdk',{
url:encodeURIComponent(window.location.href)
},function(dt){
var d = dt.body;
    wx.config({
//      debug: true,
        appId:d.appid, // 必填，公众号的唯一标识
        timestamp:d.timestamp, // 必填，生成签名的时间戳
        nonceStr:d.noncestr, // 必填，生成签名的随机串
        signature: d.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });

//  wx.ready(function(){
//      wx.onMenuShareTimeline({
//          title: '［华翼北漂］营销人员编辑页', // 分享标题
//          link:window.location.href, // 分享链接
//          imgUrl: 'http://wxs.leanapp.cn/dianxin/fa/R/icon.jpg'
//      });
//      wx.onMenuShareAppMessage({
//          title: '［华翼北漂］营销人员编辑页', // 分享标题
//          desc: '仅限内部人员使用', // 分享描述
//          link:window.location.href, // 分享链接
//          imgUrl: 'http://wxs.leanapp.cn/dianxin/fa/R/icon.jpg', // 分享图标
//          type: '', // 分享类型,music、video或link，不填默认为link
//          dataUrl: ''
//      });
//  });
});