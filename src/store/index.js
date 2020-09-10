import { createStore } from 'vuex'

export default createStore({
  state: {
    http: {
      url: "this is a url"
    }
  },
  getters: {
    http: state => state.http
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
