// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 接收视频详情
    videoInfo:[],
    // 接收推荐视频
    othersList:[],
    // 接收评论数据
    commentData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  接收首页传过来的  ID
    let videoId = options.id;  
    this.getCountVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentsList(videoId);
  },

  /**
   *根据视频ID，获取视频详情
   */
  getCountVideo(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+videoId,
      success: function(res){
        // success
        // console.log(res);
        if (res.data.code===0) {
          that.setData({
            videoInfo:res.data.data.videoInfo
          })         
        }
      }
    })
  },


  /**
   * 根据视频ID，获取推荐视频 
   */
  getOthersList(videoId){
    let that = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id="+videoId,
      success(res){
        // console.log(res);
        if (res.data.code===0) {
          that.setData({
            othersList:res.data.data.othersList
          })
        }        
      }
    })
  },


  /**
   * 根据视频ID，获取评论数据
   */
  getCommentsList(videoId){
    let that = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id="+videoId,
      success(res){
        // console.log(res)
        if (res.data.code===0) {
          that.setData({
            commentData:res.data.data.commentData
          })
        }
      }
    })
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