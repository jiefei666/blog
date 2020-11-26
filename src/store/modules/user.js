import { getToken, setToken, removeToken } from '@/helpers/auth'
import { userLoginApi } from '@/api/user'

const state = {
  token: getToken(),
  user: {}
}

const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  }
}

const actions = {
  userLogin: async ({ commit }, { username, password }) => {
    const res = await userLoginApi({ username, password })
    console.log(res)
  }
}

export default {
  namespaced: true, //开启命名空间
  state,
  mutations,
  actions,
  gutters: {}
}
