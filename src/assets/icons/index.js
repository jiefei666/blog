const req = require.context('./svg', false, /\.svg$/)

const requireAll = rquireContext => rquireContext.keys().map(rquireContext)

requireAll(req)
