<template>
    <!--<div class="grid-y">-->
        <!--<div style="height: 433px;" class="card cell">-->
            <!--<img class="card-game-image" src="../../assets/card-image.jpg">-->
            <!--<div class="card-section"></div>-->
        <!--</div>-->
    <!--</div>-->
    <v-card>
        <v-card-media src="/static/img/card-image.jpg" height="500"></v-card-media>
    </v-card>
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
