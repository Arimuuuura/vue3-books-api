// import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'
import { searchResult } from '@/api/SearchResult'


const vuexPersist = new VuexPersistence({
  storage: localStorage
})

// export default createStore({
//   state: {
//     results: [],
//     keyword: '',
//   },
//   getters: {
//     getAll: (state) => {
//       // console.log(state.results);
//       return state.results
//     },
//     getDetailByIndex: (state) => (index) => {
//       return state.results[0][index].Item
//     }
//   },
//   mutations: {
//     // ローカルストレージに保存する設定
//     RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
//     save(state, newResults) {
//       state.results = []
//       state.results.push(newResults)
//     }
//   },
//   actions: {
//   },
//   modules: {
//   },
//   plugins: [
//     vuexPersist.plugin
//   ]
// })

export default {
  namespaced: true,
  state: () => {
    return {
      results: [],
    }
  },
  getters: {
    getAll: (state) => {
      // console.log(state.results);
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
    },
    async getResults(state, inputWord) {
      state.results = await searchResult(inputWord)
    }
  },
  actions: {
    getResults({commit}, key) {
      commit('getResults', key)
    },
  },
  plugins: [
    vuexPersist.plugin
  ]
}
