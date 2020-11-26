/**
 *  事件绑定
 * @param {}
 * @return {}
 */
export const onEvent = (el, type, fn) => {
  if (el.addEventListener) {
    el.addEventListener(
      type,
      e => {
        e = e || window.e
        fn(e)
      },
      false
    )
  } else if (el.attachEvent) {
    el.attachEvent('on' + type, fn)
  } else {
    el.on[type] = fn
  }
}

/**
 * 事件解绑
 * @param {}
 * @return {}
 */
export const offEvent = (el, type, fn) => {
  if (el.removeEventListener) {
    el.removeEventListener(type, fn)
  } else if (el.detachEvent) {
    el.detachEvent('on' + type, fn)
  } else {
    el.on[type] = null
  }
}

/**
 * 获取localstorage
 * @param { String } key
 * @return { }
 */
export const getLocalStorage = key => {
  const storage = window.localStorage
  if (!storage) {
    window.alert('您的浏览器不支持localstorage')
    return false
  }
  const value = storage.getItem(key)
  return value ? JSON.parse(value) : false
}

/**
 * 设置localstorage
 * @param { String } key
 * @param { String } value
 * @return {}
 */
export const setLocalStorage = (key, value) => {
  const storage = window.localStorage
  if (!storage) {
    window.alert('您的浏览器不支持localstorage')
    return false
  }

  storage.setItem(key, JSON.stringify(value))
}

/**
 * 清除localstorage
 * @param { String } key
 * @return {}
 */
export const removeLocalStorage = key => {
  const storage = window.localStorage
  if (!storage) {
    window.alert('您的浏览器不支持localstorage')
    return false
  }

  storage.removeItem(key)
}

/**
 *  滚动
 * @param {}
 * @return {}
 */
export const scrollTo = (top = 0, left = 0, behavior = 'smooth') => {
  window.scrollTo({ left, top, behavior })
}

/**
 * getFormatDate 时间日期格式转换
 * @param {String} dateString  "1995-12-17T03:24:00"
 * @param {String} format  "yyyy-MM-dd hh:mm:ss"
 * @returns "2020-05-29 12:32:12"
 */
export const getFormatDate = (dateString = null, format) => {
  const date = new Date(dateString)
  const o = {
    'M+': date.getMonth() + 1, //month
    'd+': date.getDate(), //day
    'h+': date.getHours(), //hour
    'm+': date.getMinutes(), //minute
    's+': date.getSeconds(), //second
    'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
    S: date.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  }
  return format
}

/**
 * 从URL中解析参数
 * @param   {String} url
 * @returns {String}
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}
