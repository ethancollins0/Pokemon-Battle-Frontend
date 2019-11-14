<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    mounted(){
      this.fetchPokemon()
    },
    data(){
      return {
        base_url: this.$store.state.base_url
      }
    },
    methods: {
      fetchPokemon(){
        fetch(this.base_url + '/pokemon')
          .then(res => res.json())
          .then(pokemon => {
            pokemon = pokemon.sort((a, b) => (a.order > b.order) ? 1 : -1)
            this.$store.commit('setPokemon', pokemon)
          })
        }
      },
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  body {
    background: #f5f5f5;
  }
</style>
