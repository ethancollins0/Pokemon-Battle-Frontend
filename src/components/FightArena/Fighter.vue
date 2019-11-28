<template>
    <div v-bind:class="{ reverse: last }" class='fighter-container'>
        <FighterStats :fighter="fighter" />
        <div class='fighter'>
            <img :src="fighter.sprites.front_default" :alt="fighter.name" />
            <h2>{{fighter.name}}</h2>
            <div class='health-bar'>
            </div>
        </div>
    </div>
</template>

<script>
    import FighterStats from './FighterStats'

    export default {
        props: {
            fighter: Object,
            order: Number
        },
        data(){
            return {
                last: false
            }
        },
        components: {
            FighterStats
        },
        mounted(){
            this.order == 0
                ? null
                : this.last = true
        }
    }
</script>

<style lang="scss">
    .fighter-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        margin-left: 5px;

        .fighter {
            margin-right: 5px;
            height: 90%;
            width: 150px;
            display: flex;
            flex-direction: column;
            background: #333;
            color: #fff;
            align-items: center;
            border: 1px solid black;
            border-radius: 3px;

            .health-bar {
                height: 20px;
                width: 100%;
                background: white;
                margin-left: 5px;
                margin-right: 5px;
            }

        }
    }
 
    .reverse {
        display: flex;
        flex-direction: row-reverse;

        .fighter {
            // margin-right: 0;
        }
    }
</style>