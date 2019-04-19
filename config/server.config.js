'use strict'
const api = {
	// 网关接口走214
  '/oauth2-zt': {
      target: 'http://192.168.14.214:4000', // 接口域名
      secure: false,
      changeOrigin: false, //是否跨域
  },
  '/template': {
      target: 'http://192.168.14.214:4000', // 接口域名
      // target: 'http://192.168.14.33:6005', // 接口域名
      secure: false,
      changeOrigin: true, //是否跨域
  },
  '/files': {
			// target: 'http://192.168.14.214:4000', // 接口域名
      target: 'http://192.168.14.33:6005', // 接口域名
      secure: false,
      changeOrigin: true, //是否跨域
  }
}
module.exports = api