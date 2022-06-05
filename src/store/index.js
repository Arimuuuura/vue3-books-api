import { createStore } from 'vuex'

export default createStore({
  state: {
    results: [],
    keyword: '',
  },
  getters: {
    getAll: (state) => {
      return state.results
    },
    getDetailByIndex: (state) => (index) => {
      console.log(state, index);
      console.log(state.results[0][index].Item);
      return state.results[0][index].Item
    }
  },
  mutations: {
    save(state, newResults) {
      state.results = []
      state.results.push(newResults)
    }
  },
  actions: {
  },
  modules: {
  }
})
