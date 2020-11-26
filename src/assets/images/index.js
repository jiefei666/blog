const imgContent = require.context('./article', false, /.jpg$/)

const imgArr = imgContent.keys().map((item) => require('./article' + item.slice(1)))

export default imgArr
