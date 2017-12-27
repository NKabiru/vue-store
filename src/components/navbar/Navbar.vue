<template>
    <div class="top-bar bottom-shadow">
        <div class="top-bar-left">
            <ul class="menu">
                <li class="menu-text">Game Store</li>
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="menu">
                <li><button class="clear button" data-open="signInModal">Sign In</button></li>
                <li><button class="clear button" data-open="signUpModal">Sign Up</button></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
        <sign-in-modal></sign-in-modal>
        <sign-up-modal></sign-up-modal>
    </div>
</template>

<script>
    import SignInModal from "./SignInModal";
    import SignUpModal from "./SignUpModal";

    export default {
        name: "navbar",
        components: {
            SignUpModal,
            SignInModal}
    }
</script>

<style scoped>

</style>