import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (res) => {
    return res
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

// 后置拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.ElMessage
      ElMessage.error(`Code:${code},Message:${msg}`)
      console.error('[Axios Error]', error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return await Promise.reject(error)
  }
)

export default axios
