const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * 封装：
 * 函数名  request
 * 执行的功能  统一请求方法
 * 用到的方法  object.assign()浅拷贝  promise  reslove成功  reject失败
 * async await Es7
 * wx.request 
 * 迭代处理函数
 */
const request= options => {
//  路径
var BaseUrl='http://localhost:3000/'
  return new Promise((resolve,reject)=>{
    //  默认为 get 请求
    if(!options.method){
      options.method="get"
    }
    // 统一处理对象
    Object.assign(options,{
      url:BaseUrl+options.url,
      success:resolve,
      fail:reject,
      complete:wx.hideLoading
    })
    wx.showLoading({
      title: '加载中...',
    })
    wx.request(options)
  })
}


module.exports = {
  formatTime: formatTime,
  request:request
}




