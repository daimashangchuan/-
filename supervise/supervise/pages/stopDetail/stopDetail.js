const {request}= getApp().utils
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  获取传来的ID
    stopDetailId:null,

    //  店铺详情信息
    stopDetailList:[],
  },


  /**
   * 获取 shops 数据
   */
  async getStopDetailList(stopDetailId){
    let stopDetailList = await request({
      url:"shops"
    })
    for (let i = 0; i < stopDetailList.data.length; i++) {
      if (parseInt(stopDetailList.data[i].id)==parseInt(stopDetailId)) {
        this.setData({
          stopDetailList:stopDetailList.data[i]
        })
        break;
      }
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let stopDetailId = options.stopsDetailId;
    this.getStopDetailList(stopDetailId);
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