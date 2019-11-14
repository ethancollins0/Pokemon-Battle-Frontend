import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: [],
    base_url: 'http://10.225.132.82:3000',
    filter: ''
  },
  mutations: {
    setPokemon(state, pokemon){
      state.pokemon = pokemon
    },
    filter(state, filter){
      state.filter = filter
    }
  },
  actions: {
  },
  modules: {
  }
})
