<template>
    <div class='fighters-container'>
        <Fighter v-for="(fighter, index) in fighters" :key="index" :fighter="fighter" />
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
                .then(console.log)
        }
    }
</script>

<style lang="scss">

</style>