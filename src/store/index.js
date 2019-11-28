import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: [],
    base_url: 'http://localhost:3000',
    filter: '',
    fighters: []
  },
  mutations: {
    setPokemon(state, pokemon){
      state.pokemon = pokemon
    },
    filter(state, filter){
      state.filter = filter
    },
    setFighter(state, {position, pokemon}){
      if (position == 0){
        state.fighters.shift()
        state.fighters.unshift(pokemon[0])
      } else {
        state.fighters.pop()
        state.fighters.push(pokemon[0])
      }
    },
    setDefaultFighters(state, fighters){
      state.fighters = fighters
    }
  },
  actions: {
  },
  modules: {
  }
})
