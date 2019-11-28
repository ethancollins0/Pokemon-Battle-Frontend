<template>
    <div class='pokemon-filter'>
        <form @submit="handleSubmit">
            <input placeholder="filter..." name='name' v-on:input="handleChange" />
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
                let value = event.target.value
                value = value.split(' ').join('')
                this.$store.commit('filter', value)
            }
        }
    }
</script>

<style lang="scss">
    .pokemon-filter {
        form {
            display: flex;
            justify-content: center;

            input {
                height: 2rem;
                margin-bottom: 1rem;
                width: 30vw;
                min-width: 200px;
                max-width: 300px;
                outline: none;
                font-size: 12pt;
                padding: 5px;
                background: #fff;
            }

        }
    }
</style>