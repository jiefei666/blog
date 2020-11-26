const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: '9000',
    open: true,
    proxy: {
      '/api': {
        target: 'http://47.103.194.147:2000',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    extract: false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(true) //修复热更新失效

    //配置svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons/svg'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    //配置less全局变量文件
    const addLessResource = rule => {
      rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [resolve('src/themes/themeify.less')]
        })
    }
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addLessResource(config.module.rule('less').oneOf(type)))
  }
}
