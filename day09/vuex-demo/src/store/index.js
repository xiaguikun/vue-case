import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 用来管理所有的公共状态
  state: {
    count: 2,
    name: '张军',
    msg: 'hello Vue!',
    num: 8
  },
  // 在vuex中的计算属性
  getters: {
    reverseMsg(state, getters) {
      return state.msg.split('').reverse().join('') + getters.doubleCount
    },
    doubleCount(state) {
      return state.count * 2
    }
  },
  // 存放同步方法的地方，也是唯一能够去改变state的值的地方
  mutations: {
    // mutations里面都可以直接用一个参数state
    incrementM(state, payload) {
      state.count += payload.num
    }
  },

  // 存放异步方法的地方,在这里触发mutations里面的方法
  actions: {
    incrementA({ commit }, payload) {
      // console.log(context)
      commit('incrementM', payload)
    }
  },
  modules: {
  }
})

export default store
