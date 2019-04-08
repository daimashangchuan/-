const {request} = getApp().utils
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 获取轮播图容器
    sildesList:[],
    categoriesList:[]
  },

  /**
   * 获取轮播图的数据
   */

  getSildesList:async function(){
    var slides = await request({
      url:"slides"
    })
    this.setData({
      sildesList:slides.data
    })
  },
    
  /**
   * 获取列表
   */
  getCategoriesList:async function(){
    var categories = await request({
      url:"categories"
    })
    this.setData({
      categoriesList:categories.data
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getSildesList();
    this.getCategoriesList();
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