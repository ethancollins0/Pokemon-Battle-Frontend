<template>
    <div class='PokemonFilter'>
        <form @submit="handleSubmit">
            <input name='name' v-on:input="handleChange" />
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: ''
            }
        },
        methods: {
            handleSubmit(event){
                event.preventDefault()
                console.log(event.target.name.value)
            },
            handleChange(event){
                this.$store.commit('filter', event.target.value)
            }
        }
    }
</script>

<style lang="scss">

</style>