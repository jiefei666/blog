import axios from 'axios'
import { BASE_URL } from '@/config'

// create an axios instance
console.log(BASE_URL)
const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

request.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = `Bearer ${token}`

    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    const { response } = error

    Promise.reject(error)
  }
)

export default request
