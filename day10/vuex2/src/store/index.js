import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// const moduleA = {
//   // 做命名空间
//   namespaced: true,
//   state: {
//     msg: 'hello world'
//   },
//   getters: {
//     reverseMsg(state, getters, rootState, rootGetters) {
//       console.log(rootGetters)
//       return state.msg.split('').reverse().join('')
//     }
//   },
//   mutations: {
//     changeMsg(state, payload) {
//       state.msg = payload.message
//     }
//   },
//   actions: {}
// }

// const moduleB = {
//   namespaced: true,
//   state: {
//     count: 5
//   },
//   mutations: {
//     countAdd(state, payload) {
//       state.count += payload.num
//     }
//   },
//   actions: {
//     asyncAdd({ commit }, payload) {
//       setTimeout(() => {
//         commit('countAdd', payload)
//       }, 1000)
//     }
//   }
// }

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // modules: {
  //   a: moduleA,
  //   b: moduleB
  // }
})

// export default new Vuex.Store({
//   state: {
//     msg: 'hello world',
//     count: 5
//   },
//   getters: {
//     reverseMsg(state) {
//       return state.msg.split('').reverse().join('')
//     }
//   },
//   mutations: {
//     changeMsg(state, payload) {
//       state.msg = payload.message
//     },
//     countAdd(state, payload) {
//       state.count += payload.num
//     }
//   },
//   actions: {
//     asyncAdd({ commit }, payload) {
//       setTimeout(() => {
//         commit('countAdd', payload)
//       }, 1000)
//     }
//   },
//   modules: {
//   }
// })
