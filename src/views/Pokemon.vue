<template>
    <div class='Pokemon'>
        <FightersContainer />
        <PokemonCardContainer />
    </div>
</template>

<script>
    import PokemonCardContainer from '@/components/Pokemon/PokemonCardContainer'
    import FightersContainer from '@/components/FightArena/FightersContainer'

    export default {
        components: {
            PokemonCardContainer,
            FightersContainer
        }
    }
</script>

<style lang="scss">

</style>