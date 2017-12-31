<template>
    <div>
        <div class="title-bar bottom-shadow show-for-small-only" data-hide-for="medium">
            <button data-toggle="responsive-menu"></button>
            <div class="title-bar-title">Game Store</div>
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
                    <li><a href="#"><icon name="shopping-cart"></icon> Cart</a></li>
                </ul>
            </div>
            <sign-in-modal></sign-in-modal>
            <sign-up-modal></sign-up-modal>
        </div>
    </div>
</template>

<script>
    import SignInModal from "./SignInModal";
    import SignUpModal from "./SignUpModal";
    import 'vue-awesome/icons/shopping-cart';
    import Icon from 'vue-awesome/components/Icon';

    export default {
        name: "navbar",
        components: {
            SignUpModal,
            SignInModal,
            Icon
            }
    }
</script>

<style scoped>

</style>