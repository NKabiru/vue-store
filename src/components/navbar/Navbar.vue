<template>
    <!--<div>-->
        <!--<div class="title-bar bottom-shadow show-for-small-only" data-hide-for="medium">-->
            <!--<button data-toggle="responsive-menu"><icon name="bars"></icon></button>-->
            <!--<div class="title-bar-title">&emsp;Game Store</div>-->
        <!--</div>-->

        <!--<div class="top-bar bottom-shadow show-for-medium" id="responsive-menu">-->
            <!--<div class="top-bar-left">-->
                <!--<ul class="menu">-->
                    <!--<li class="menu-text">Game Store</li>-->
                <!--</ul>-->
            <!--</div>-->
            <!--<div class="top-bar-right">-->
                <!--<ul class="menu">-->
                    <!--<li v-if="!isLoggedIn"><button class="clear button" data-open="signInModal">Login</button></li>-->
                    <!--<li v-if="!isLoggedIn"><button class="clear button" data-open="signUpModal">Register</button></li>-->

                    <!--<li v-if="isLoggedIn"><a>{{ loggedInUser }}</a></li>-->

                    <!--<li v-if="isLoggedIn"><button class="clear button" data-open="addGameModal">Add Item</button></li>-->
                    <!--<li>-->
                        <!--<a href="#" data-open="cartModal">-->
                            <!--<img v-if="numberOfCartItems < 1" class="cart-icon" src="../../assets/shopping-cart.svg">-->
                            <!--<img v-else class="cart-icon" src="../../assets/full-shopping-cart.svg">-->
                        <!--</a>-->
                    <!--</li>-->

                    <!--<li v-if="isLoggedIn">-->
                        <!--<button class="clear alert button" @click="logout">Logout</button>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->

        <!--<sign-in-modal></sign-in-modal>-->
        <!--<sign-up-modal></sign-up-modal>-->
        <!--<add-game-modal></add-game-modal>-->
        <!--<cart></cart>-->
    <!--</div>-->
    <div>
        <v-toolbar app>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>Game Store</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-if="!isLoggedIn" flat slot="activator" v-on:click.native="dialog = true">Login</v-btn>
                <v-btn v-if="!isLoggedIn" flat>Register</v-btn>
                <v-btn icon>
                    <v-icon>shopping_cart</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Sign In</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Email Address" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Password" type="password" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="dialog = false">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import SignInModal from "./SignInModal";
    import SignUpModal from "./SignUpModal";
    import Cart from './Cart';
    import 'vue-awesome/icons/shopping-cart';
    import 'vue-awesome/icons/bars';
    import Icon from 'vue-awesome/components/Icon';
    import AddGameModal from "./AddGameModal";
    import { mapGetters } from 'vuex';

    export default {
        name: "navbar",

        data(){
            return {
                dialog: false
            }
        },

        computed:{
            ...mapGetters([
                'numberOfCartItems',
                'isLoggedIn',
                'loggedInUser'
            ])
        },

        methods: {
            logout(){
                this.$store.dispatch('logout');
                this.$message.info('You are logged out');
            }
        },

        components: {
            AddGameModal,
            SignUpModal,
            SignInModal,
            Icon,
            Cart
            }
    }
</script>

<style scoped>

</style>