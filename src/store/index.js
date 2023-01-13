import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
        company: {},
        products: []
    }
  },
  getters: {
  },
  mutations: {
    products(state, list) {
      state.customerInvest = list;
    }      
  },
  actions: {
  },
  modules: {
  }
})
