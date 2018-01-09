<template>
    <div class="grid-y">
        <div class="card cell" v-for="game in cardItems">
            <img class="card-game-image" :src="game.image.super_url">
            <div class="card-section">{{ game.name }}</div>
        </div>
    </div>
</template>

<script>
    import {apiKey} from "../../api/config";
    import {baseUrl} from "../../api";
    let m = require('mithril');

    export default {
        name: "card-component",
        data(){
            return{
                cardItems: ''
            }
        },
        mounted(){
            m.jsonp({
                url: `${ baseUrl }/games/`,
                data: {
                    api_key: apiKey,
                    format: 'jsonp',
                    field_list: 'name,deck,image,guid',
                    filter:'id:38497'
                },
                callbackKey: 'json_callback'
            }).then(game => {
                this.cardItems = game.results
            })
        }
    }
</script>
