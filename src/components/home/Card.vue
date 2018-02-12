<template>
    <v-flex sm4>
        <h3>Featured</h3>
        <v-card>
            <v-card-media src="/static/img/card-image.jpg" height="500"></v-card-media>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "card-component",
        data(){
            return{
                cardItems: ''
            }
        },
        mounted(){

        }
    }
</script>
