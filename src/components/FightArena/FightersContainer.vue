<template>
    <div class='fighters-container'>
        <Fighter v-for="(fighter, index) in fighters" v-bind:key="fighter.id" :fighter="fighter" :order="index" />
    </div>
</template>

<script>
    import Fighter from './Fighter'

    export default {
        components: {
            Fighter
        },
        computed: {
            fighters(){
                return this.$store.state.fighters
            }
        },
        mounted(){
            fetch(this.$store.state.base_url + '/fighters')
                .then(res => res.json())
                .then(fighters => {
                    console.log(fighters)
                    fighters
                        ? this.$store.commit('setDefaultFighters', fighters)
                        : alert('failed to set default fighters')
                })
        }
    }
</script>

<style lang="scss">
    .fighters-container {
        width: 100%;
        height: 200px;
        background: #fff;
        border: 1px solid black;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>