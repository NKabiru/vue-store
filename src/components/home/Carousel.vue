<template>
    <v-carousel hide-delimiters>
        <v-carousel-item v-for="(game,i) in carouselGames" v-bind:src="game.src" :key="i"></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "carousel-component",

        data() {
            return {
                carouselGames: [
                    {src: '/static/img/carousel-destiny2.jpg'},
                    {src: '/static/img/carousel-callofdutyww2.jpg'},
                    {src: '/static/img/carousel-shadowofwar.jpg'}
                ]
            }
        },

        computed:{

        },

        methods: {

        }
    }
</script>