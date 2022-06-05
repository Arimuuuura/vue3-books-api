import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  state: {
    results: [],
    keyword: '',
  },
  getters: {
    getAll: (state) => {
      console.log(state.results);
      return state.results
    },
    getDetailByIndex: (state) => (index) => {
      return state.results[0][index].Item
    }
  },
  mutations: {
    // ローカルストレージに保存する設定
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    save(state, newResults) {
      state.results = []
      state.results.push(newResults)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    vuexPersist.plugin
  ]
})
