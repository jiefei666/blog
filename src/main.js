import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from './antd'
import Particles from 'particles.vue'
import SvgIcon from '@/components/SvgIcon'
import MyTag from '@/views/MyTag'

/* Import styles */

import '@/themes/common.less'
import '@/themes/normalize.less'
import '@/themes/animation.less'
import '@/assets/icons'

/* Register component */

Vue.use(antd)
Vue.use(Particles)
Vue.component('my-tag', MyTag)
Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
