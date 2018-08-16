// pages/san/vlog/vlog.js
var part_urls = {};
var videoPage;
var pageArr = new Array();
import qqVideo from "../../../utils/qqVideo.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markdown: "# 2018-first-half-year-182s\n- 拍摄：iPhone\n- 制作：1 seconds everyday app\n- 剪辑：final cut pro x",
    file_id: "r0731mzr48o"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    videoPage = 1;
    pageArr = new Array();
    part_urls = {};
    var that = this;
    const vid = "r0731mzr48o";
    console.log(vid);
    qqVideo.getVideoes(vid).then(function(response) {

      for (var i = 1; i < response.length + 1; i++) {
        var indexStr = 'index' + (i)
        pageArr.push(i);
        part_urls[indexStr] = response[i - 1];
      }
      that.setData({
        videUrl: response[0],
      });
    });
  },
  // 因为视频超过10分钟之后，会分段，所以当视频为多段的时候，
  // 自动播放下一段视频
  playEnd: function() {

    if (videoPage > parseInt(pageArr.length)) {
      // part_urls = {};
      videoPage = 1;
      this.videoContext.exitFullScreen
    } else {
      videoPage++;
      var index = 'index' + videoPage;
      this.setData({
        videUrl: ''
      });
      this.setData({
        videUrl: part_urls[index]
      });

    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})