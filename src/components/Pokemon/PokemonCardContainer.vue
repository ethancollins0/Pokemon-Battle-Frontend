<template>
    <div class='pokemon-page'>
        <PokemonFilter />
        <div class='pokemon-card-container'>
            <PokemonCard v-for="pokemon in filterPokemon()" :pokemon="pokemon" :key="pokemon.id" />
        </div>
    </div>
</template>

<script>
    import PokemonCard from './PokemonCard'
    import PokemonFilter from './PokemonFilter'

    export default {
        computed: {
            pokemonArray(){
                return this.$store.state.pokemon
            },
            filter(){
                return this.$store.state.filter
            }
        },
        methods: {
            filterPokemon(){
                return this.pokemonArray.filter(pokemon => {
                    return pokemon.name.toLowerCase().replace(' ', '').includes(this.filter.toLowerCase())
                })
            }
        },
        components: {
            PokemonCard,
            PokemonFilter
        },
    }
</script>

<style lang="scss">
.pokemon-page {
    .pokemon-card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}
</style>