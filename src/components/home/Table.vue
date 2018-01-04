<template>
    <div class="grid-x grid-padding-x">
        <div class="small-12 medium-3 card-padding" v-for="game in showGames">
            <div class="card">
                <img class="card-image" :src="game.image.small_url">
                <div class="card-section">
                    <div>{{ game.name }}</div>
                    <div>
                        <button class="tiny secondary button" @click="showItemInModal(game)">Details</button>
                        <button class="tiny primary button" @click="addItemToCart(game)">Add</button>
                    </div>
                </div>
            </div>
        </div>

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

        computed: {
            showGames(){
                return this.$store.state.games;
            }
        },

        mounted(){
            m.jsonp({
                url: `${ baseUrl }/games/`,
                data: {
                    api_key: apiKey,
                    format: 'jsonp',
                    field_list: 'name,deck,image,guid',
                    filter:'id:52647|54144|56733|34407|48320|33394|30475|54979'
                },
                callbackKey: 'json_callback'
            }).then(game => {
                this.tableItems = game.results
            })

            this.reveal = new Foundation.Reveal($('#viewGameModal'));
        },

        methods: {
            showItemInModal(item){
                this.reveal.open();
                this.selectedItem = item;
            },
            addItemToCart(item){
                this.$store.commit('ADD_TO_CART', item);
            }
        },
        destroyed(){
            this.reveal.destroy()
        }
    }
</script>
