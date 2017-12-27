<template>
    <div>
        <h5>Games of the week</h5>
        <div class="card" v-for="game in cardGameData">
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
                cardGameIDs: ['3030-54134', '3030-59203'],
                cardGameData: []
            }
        },
        mounted(){
            for(let i = 0; i < this.cardGameIDs.length; i++){
                m.jsonp({
                    url: `${ baseUrl }/game/${ this.cardGameIDs[i] }/`,
                    data: {
                        api_key: apiKey,
                        format: 'jsonp',
                        field_list: 'name,deck,image,guid'
                    },
                    callbackKey: 'json_callback'
                }).then(game => {
                    this.cardGameData.push(game.results)
                })
            }
        }
    }
</script>
