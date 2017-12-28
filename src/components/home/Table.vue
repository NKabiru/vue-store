<template>
    <div>
        <table class="unstriped" v-if="tableItems.length > 0">
            <tbody>
            <tr v-for="game in tableItems">
                <td class="table-game-icon"><img class="game-image" :src="game.image.medium_url"></td>
                <td class="table-game-name">{{ game.name }}</td>
                <td class="table-game-details">{{ game.deck }}</td>
                <td>
                    <button class="tiny secondary button" data-open="viewGameModal" @click="showItemInModal(game)" type="button">View</button>
                    <button class="tiny success button" type="button">Add</button>
                </td>
            </tr>
            </tbody>
        </table>

        <div class="reveal" id="viewGameModal" data-reveal>
            <h4>{{ selectedItem.name }}</h4>
            <p>{{ selectedItem.deck }}</p>
            <button class="hollow button secondary" data-close>Cancel</button>
            <button class="close-button" data-close type="button"><span>&times;</span></button>
        </div>
    </div>
</template>

<script>
    import {apiKey} from "../../api/config";
    import {baseUrl} from "../../api";
    let m = require('mithril');

    export default {
        name: "table-component",
        data(){
            return{
                tableItems: '',
                selectedItem: ''
            }
        },
        mounted(){
            m.jsonp({
                url: `${ baseUrl }/games/`,
                data: {
                    api_key: apiKey,
                    format: 'jsonp',
                    field_list: 'name,deck,image,guid',
                    filter:'id:52647|58573|54144|56733|34407|48320|33394|30475|54979'
                },
                callbackKey: 'json_callback'
            }).then(game => {
                this.tableItems = game.results
            })
        },

        methods: {
            showItemInModal(item){
                this.selectedItem = item;
            }
        }
    }
</script>
