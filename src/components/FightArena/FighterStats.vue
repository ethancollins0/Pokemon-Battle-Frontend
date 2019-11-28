<template>
    <div class='fighter-stats'>
        <section class='types' >
            <img v-for="(type, index) in fighter.types" :key="index" :src="getImage(type.type.name)" :alt="type.type.name" />
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            fighter: Object
        },
        methods: {
            getImage(type){
                let images = require.context('@/assets/', false, /\.png$/)
                return images('./' + type + ".png")
            }
        }
    }
</script>

<style lang="scss">
    .fighter-stats {
        margin-right: 5px;
        height: 90%;
        width: 150px;
        border: 1px solid black;

        .types {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            img {
                width: 45%;
            }
        }

    }
</style>