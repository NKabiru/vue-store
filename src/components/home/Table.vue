<template>
    <table class="unstriped" v-if="tableGameData.length > 0">
        <tbody>
        <tr v-for="game in tableGameData">
            <td class="table-game-icon"><img class="game-image" :src="game.image.medium_url"></td>
            <td class="table-game-name">{{ game.name }}</td>
            <td class="table-game-details">{{ game.deck }}</td>
            <td>
                <button class="tiny secondary button" type="button">View</button>
                <button class="tiny success button" type="button">Add</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import {apiKey} from "../../api/config";
    import {baseUrl} from "../../api";
    let m = require('mithril');

    export default {
        name: "table-component",
        data(){
            return{
                tableGameIDs: ['3030-54134', '3030-59203', '3030-52647', '3030-58573', '3030-54144','3030-56733','3030-34407',
                    '3030-48320', '3030-33394', '3030-30475', '3030-54979'],
                tableGameData: []
            }
        },
        mounted(){
            for(let i = 0; i < this.tableGameIDs.length; i++){
                m.jsonp({
                    url: `${ baseUrl }/game/${ this.tableGameIDs[i] }/`,
                    data: {
                        api_key: apiKey,
                        format: 'jsonp',
                        field_list: 'name,deck,image,guid'
                    },
                    callbackKey: 'json_callback'
                }).then(game => {
                    this.tableGameData.push(game.results)
                })
            }
        }
    }
</script>
