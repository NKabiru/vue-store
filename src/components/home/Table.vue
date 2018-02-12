<template>
    <!--<div class="grid-x grid-padding-x">-->
        <!--<div class="small-12 medium-3 card-padding" v-for="game in showGames">-->
            <!--<div class="card">-->
                <!--<img class="card-image" v-lazy="game.image.small_url">-->
                <!--<div class="card-section">-->
                    <!--<div class="game-text text-left">{{ game.name }}</div>-->
                    <!--<div class="text-left">Kes. {{ game.price }}</div>-->
                    <!--<div class="card-buttons">-->
                        <!--<button class="tiny secondary button" @click="showItemInModal(game)">Details</button>-->
                        <!--<button v-if="isLoggedIn" class="tiny primary button" @click="addItemToCart(game)">Add</button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="reveal" id="viewGameModal" data-reveal>-->
            <!--<h4>{{ selectedItem.name }}</h4>-->
            <!--<p>{{ selectedItem.deck }}</p>-->
            <!--<button class="hollow button secondary" data-close>Cancel</button>-->
            <!--<button class="close-button" data-close type="button"><span>&times;</span></button>-->
        <!--</div>-->
    <!--</div>-->
    <v-flex sm12>
        <h3>Most Popular</h3>
        <v-layout row wrap>
           <v-flex md4 v-for="game in showGames">
               <v-card>
                   <v-card-media :src="game.image.small_url" height="400"></v-card-media>
                   <v-card-title>
                       <div>
                           <div class="headline">{{ game.name }}</div>
                           <div>Kes. {{ game.price }}</div>
                       </div>
                   </v-card-title>
                   <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn flat color="blue" @click="showItemInModal(game); detailsDialog = true">Details</v-btn>
                       <v-btn v-if="isLoggedIn" flat color="blue" @click="addItemToCart(game)">Add To Cart</v-btn>
                   </v-card-actions>
               </v-card>
           </v-flex>
        </v-layout>

        <v-dialog v-model="detailsDialog" max-width="500">
            <v-card>
                <v-card-title class="headline">{{ selectedItem.name }}</v-card-title>
                <v-card-text>{{ selectedItem.deck }}</v-card-text>
                <v-card-actions>
                    <v-btn flat color="blue" @click="detailsDialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>
    </v-flex>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "table-component",

        data(){
            return{
                tableItems: '',
                selectedItem: '',
                itemQuantity: 0,
                detailsDialog: false
            }
        },

        computed: {
            showGames(){
                return this.$store.state.games;
            },

            ...mapGetters([
                'isLoggedIn'
            ])
        },

        methods: {
            showItemInModal(item){
                this.selectedItem = item;
            },
            addItemToCart(item){
                this.$message.info("Added to cart");
                this.$store.commit('ADD_TO_CART', item);
            }
        }
    }
</script>
