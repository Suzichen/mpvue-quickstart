import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()
fly.config.timeout = 10 * 1000
fly.config.baseURL = 'http://api.xyz.com'

// 设置拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({ title: '拼命加载中...' })
  return request
})

fly.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    console.log(err)
    wx.hideLoading()
    return promise.resolve()
  }
)

export default fly
