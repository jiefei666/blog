import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import gutters from './gutters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  gutters: gutters,
  mutations: {},
  actions: {},
  modules: { user }
})
