<template>
    <div>
        <div class="title-bar bottom-shadow show-for-small-only" data-hide-for="medium">
            <button data-toggle="responsive-menu"><icon name="bars"></icon></button>
            <div class="title-bar-title">&emsp;Game Store</div>
        </div>

        <div class="top-bar bottom-shadow show-for-medium" id="responsive-menu">
            <div class="top-bar-left">
                <ul class="menu">
                    <li class="menu-text">Game Store</li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li><button class="clear button" data-open="signInModal">Sign In</button></li>
                    <li><button class="clear button" data-open="signUpModal">Sign Up</button></li>
                    <li><button class="clear button" data-open="addGameModal">Add Item</button></li>
                    <li>
                        <a href="#" data-open="cartModal">
                            <img v-if="numberOfCartItems < 1" class="cart-icon" src="../../assets/shopping-cart.svg">
                            <img v-else class="cart-icon" src="../../assets/full-shopping-cart.svg">
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <sign-in-modal></sign-in-modal>
        <sign-up-modal></sign-up-modal>
        <add-game-modal></add-game-modal>
        <cart></cart>
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

        computed:{
            ...mapGetters([
                'numberOfCartItems'
            ])
        },

        methods: {

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