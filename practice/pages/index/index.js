Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 被点击的首页导航的菜单的索引
    currentIndexNav:0,
    // 首页导航数据
    navList:[],

    // 轮播图数据
    swiperList:[],

    // 视频列表数据
    videosList:[]
  },


  // 点击首页导航按钮加下滑线
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that=this;
    //  利用小程序内置发送请求的方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navlist',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // console.log(res)
        if (res.data.code===0) {
          //  动态绑定元素
          that.setData({
            navList:res.data.data.navList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList(){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success: function(res){
        // success
        // console.log(res)
        if (res.data.code===0) {
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },

  /**
   * 获取列表的数据
   */
  getVideoList(){
    let that = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      success:function(res){
        // console.log(res)
        if (res.data.code===0) {
          that.setData({
            videosList:res.data.data.videosList 
          })
        }
      }
    })
  },


  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.获取首页导航数据
    this.getNavList();
    this.getSwiperList();
    this.getVideoList()
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