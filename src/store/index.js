import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
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
