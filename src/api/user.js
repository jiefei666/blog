import request from '@/helpers/request'
import { encrypt } from '@/helpers/aes'

//登录api
export const userLoginApi = ({ password, username }) => {
  return request.post('/login', { password: encrypt(password), username })
}
