import axios from 'axios'
import api from './api'

// 登陆单独使用
function loginMethod(url, data, headers) {
  // 不需要token
  return axios({
    url,
    method: 'post',
    data: { ...data },
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers
  })
}

// 密码登陆
const login = (data) => {
  let headers = {
    'Authorization': 'Basic YWFhYWFhYToxMjM0NTY=',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
  return loginMethod(api.login.url, { ...data }, headers)
}

// 验证码登陆
// const loginMobile = (params) => {
//   let headers = {
//     'Authorization': 'Basic YWFhYWFhYToxMjM0NTY=',
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//   }
//   return loginMethod(api.loginMobile.url, { ...params }, headers)
// }

// function postMethod(url, data, headers) {
//   headers = filterHeader(headers)
//   return axios({
//     url,
//     method: 'post',
//     data: { ...data },
//     transformRequest: [function (data) {
//       let ret = ''
//       for (let it in data) {
//         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//       }
//       return ret
//     }],
//     headers
//   })
// }

// function postJsonMethod(url, data, headers) {
//   headers = filterHeader(headers)
//   return axios({
//     url,
//     method: 'post',
//     data: { ...data },
//     transformRequest: [function (data) {
//       data = JSON.stringify(data)
//       return data
//     }],
//     headers
//   })
// }

// function getMethod(url, params, headers) {
//   headers = filterHeader(headers)
//   return axios({
//     url,
//     method: 'get',
//     params: { ...params },
//     headers
//   })
// }

// 过滤请求头，加token
// function filterHeader(headers) {
//   // 默认头部类型
//   return Object.assign({
//     'Authorization': 'Bearer ' + window.localStorage.getItem('userToken'),
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//   }, ...headers)
// }

// 上传文件
// const uploadFile = (formData) => {
//   return axios({
//     url: api.uploadFile.url,
//     method: 'post',
//     data: formData,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
// }

export default {
  // uploadFile
  login
}
