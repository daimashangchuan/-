const {request} = getApp().utils
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 列表区间
    stopsSection:[
      {start:0,end:17},
      {start:17,end:34},  
      {start:34,end:51},
      {start:51,end:68},
      {start:68,end:85},
      {start:85,end:102},
      {start:102,end:119},
      {start:119,end:136},
      {start:136,end:156}
    ],
    // 列表详情容器
    stopsList:[],

  },


  // 获取列表数据
  // getStopsList(stopsId){
  //   let that = this;
  //   wx.request({
  //     url: 'http://localhost:3000/shops',
  //     success: function(res){
  //       // console.log(res)
  //       let start = that.data.stopsSection[stopsId].start;
  //       let end = that.data.stopsSection[stopsId].end;
  //       that.setData({
  //         stopsList:res.data.slice(start,end)
  //       })    
  //     }
  //   })
  // },


  async getStopsList(stopsId){
    var stopsList = await request({
      url:"shops"
    })
    let start = this.data.stopsSection[stopsId].start;
    let end = this.data.stopsSection[stopsId].end;
    this.setData({
      stopsList:stopsList.data.slice(start,end)
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 接收index列表传过来的ID
    let stopsId=options.id
    this.getStopsList(stopsId)
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