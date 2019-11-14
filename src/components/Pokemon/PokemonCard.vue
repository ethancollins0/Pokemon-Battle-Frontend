<template>
    <div @click="handleClick" class='pokemon-card'>
        <div class='pokemon-details'>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
            <h3>{{pokemon.name}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            pokemon: Object
        },
        computed: {
            base_url(){
                return this.$store.state.base_url
            }
        },
        methods: {
            handleClick(){
                fetch(this.base_url + `/pokemon/${this.pokemon.id}`)
                    .then(res => res.json())
                    .then(console.log)
            }
        }
    }
</script>

<style lang="scss">
    .pokemon-card {
        height: 300px;
        width: 20vw;
        min-width: 200px;
        background: #fff;
        border: 1px solid black;
        border-radius: 3px;
        margin-bottom: 1rem;

        .pokemon-details {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }
</style>