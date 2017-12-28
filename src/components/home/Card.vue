<template>
    <div>
        <h5>Games of the week</h5>
        <div class="card" v-for="game in cardItems">
            <img class="card-game-image" :src="game.image.screen_url">
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
                    filter:'id:54134|59203'
                },
                callbackKey: 'json_callback'
            }).then(game => {
                this.cardItems = game.results
            })
        }
    }
</script>
