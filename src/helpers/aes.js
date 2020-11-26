import { setLocalstorage, getLocalstorage, removeLocalstorage } from '@/utils'
import { AES, enc, mode, pad } from 'crypto-js'

const pwdKey = 'USER_PASSWORD'
const secretKey = '1234567890ABCDEF'

export function getPassword() {
  const password = getLocalstorage(pwdKey)
  return decrypt(password)
}

export function setPassword(val) {
  const password = encrypt(val)
  return setLocalstorage(pwdKey, password)
}

export function removePassword() {
  return removeLocalstorage(pwdKey)
}

// 加密
export function encrypt(text) {
  let key = enc.Utf8.parse(secretKey)
  let pwd = enc.Utf8.parse(text)
  let encrypted = AES.encrypt(pwd, key, {
    mode: mode.ECB,
    padding: pad.Pkcs7
  })
  return encrypted.toString()
}

// 解密
export function decrypt(text) {
  let key = enc.Utf8.parse(secretKey)
  let decrypt = AES.decrypt(text, key, {
    mode: mode.ECB,
    padding: pad.Pkcs7
  })
  return enc.Utf8.stringify(decrypt).toString()
}
