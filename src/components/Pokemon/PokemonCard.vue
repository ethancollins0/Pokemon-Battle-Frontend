<template>
    <div @click="handleClick" class='pokemon-card'>
        <div class='pokemon-info'>
            <div class='pokemon-details'>
                <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
                <h3>{{pokemon.name}}</h3>
            </div>
            <div class='pokemon-selection'>
                <button name='0' @click="handleClick" >Select Fighter 1</button>
                <button name='1' @click="handleClick" >Selecter Fighter 2</button>
            </div>
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
            handleClick(event){
                const position = +event.target.name
                fetch(this.base_url + `/pokemon/${this.pokemon.id}`)
                    .then(res => res.json())
                    .then(pokemon => {
                        pokemon
                            ? this.$store.commit('setFighter', {position, pokemon})
                            : null
                    })
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

        .pokemon-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;

            .pokemon-details {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: center;
            }

            .pokemon-selection {  
                display: flex;
                flex-direction: column;                 
                button {
                    width: 100%;
                    height: 2rem;
                }
            }
        }

    }
</style>