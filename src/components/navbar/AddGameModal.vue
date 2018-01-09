<template>
    <div>
        <div class="reveal" id="addGameModal">
            <h4>Add New Game</h4>
            <div class="grid-x">
                <div class="small-12 cell">
                    <div class="input-group">
                        <input class="input-group-field" type="text" v-model="searchGame" placeholder="Search Game...">
                        <div class="input-group-button">
                            <button class="small button" @click="searchGameFromApi"><icon name="search"></icon></button>
                        </div>
                    </div>
                </div>
                <div class="small-12 cell">
                    <template v-if="searchResults.length >= 1">
                        <p>Search Results:</p>
                        <table class="unstriped">
                            <tbody>
                            <tr v-for="game in searchResults">
                                <td><img class="search-result-icon" :src="game.image.icon_url" alt=""></td>
                                <td>{{ game.name }}</td>
                                <td><button class="cell-center tiny hollow button" @click="addGameToCatalog(game)">Add To Catalog</button></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="input-group">
                            <span class="input-group-label">Kes</span>
                            <input class="input-group-field" type="number" placeholder="Price">
                        </div>
                    </template>
                </div>
                <div class="small-12-cell">
                    <button class="alert small button" data-close @click="clearSearch">Cancel</button>
                </div>
            </div>
            <button class="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>

</template>

<script>
    import {apiKey} from "../../api/config";
    import {baseUrl} from "../../api";
    import Icon from "vue-awesome/components/Icon";
    import 'vue-awesome/icons/plus-circle'
    import 'vue-awesome/icons/search';
    let m = require('mithril');

    export default {
        name: "add-game-modal",

        data(){
            return{
                searchGame: '',
                searchResults: []
            }
        },

        methods:{
            searchGameFromApi(){
                m.jsonp({
                    url: `${ baseUrl }/search/`,
                    data: {
                        api_key: apiKey,
                        format: 'jsonp',
                        limit: 5,
                        field_list: 'name,deck,image,guid',
                        resources:'game',
                        query: this.searchGame
                    },
                    callbackKey: 'json_callback'
                }).then(game => {
                    this.searchResults = game.results;
                });
            },

            clearSearch(){
                this.searchResults = [];
                this.searchGame = '';
            },

            addGameToCatalog(item){
                if(this.$store.state.games.includes(item)){
                    this.$message.info("The game already exists in the catalog.");
                }else{
                    this.$store.commit('ADD_TO_CATALOG', item);
                    this.$message.success("Game added");
                }
            }

        },

        mounted(){
            this.reveal = new Foundation.Reveal($('#addGameModal'));
        },

        destroyed(){
            this.reveal.destroy();
        },

        components: {
            Icon
        },
    }
</script>

<style scoped>

</style>