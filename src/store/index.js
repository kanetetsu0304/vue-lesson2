import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addList(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
    removeList(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCard(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removeCard(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
  },
  actions: {
    addList(context, payload) {
      context.commit('addList', payload)
    },
    removeList(context, payload) {
      context.commit('removeList', payload)
    },
    addCard(context, payload) {
      context.commit('addCard', payload)
    },
    removeCard(context, payload) {
      context.commit('removeCard', payload)
    },
  },
  modules: {
  },
  getters: {
    totalCount(state) {
      const totalCount = state.lists.reduce((sum, content) => sum += content.cards.length, 0)
      return totalCount;
    }
  }
})
