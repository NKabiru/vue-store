<template>
    <div class="top-bar bottom-shadow">
        <div class="top-bar-left">
            <ul class="menu">
                <li class="menu-text">Game Store</li>
                <li><router-link class="navbar-links" :to="{ name: 'Top Sellers'}">Top Sellers</router-link></li>
                <li><router-link class="navbar-links" :to="{ name: 'New Releases'}">New Releases</router-link></li>
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="menu">
                <li><input type="text" placeholder="Search"></li>
                <li><button class="clear button" data-open="signInModal">Sign In</button></li>
                <li><button class="clear button" data-open="signUpModal">Sign Up</button></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
        <div class="reveal" id="signInModal" data-reveal>
            <h4>Sign In</h4>
            <form>
                <div class="grid-x">
                    <div class="cell">
                        <label>
                            Username
                            <input type="text">
                        </label>
                    </div>
                    <div class="cell">
                        <label>
                            Password
                            <input type="password">
                        </label>
                    </div>
                </div>
            </form>
            <div class="grid-x">
                <button class="hollow secondary button" type="button" data-close>Cancel</button>
                &emsp;
                <button class="button" type="button" data-close>Submit</button>
            </div>
        </div>
        <div class="reveal" id="signUpModal" data-reveal>
            <h4>Sign Up</h4>
            <form>
                <div class="grid-x">
                    <div class="cell">
                        <label>
                            Username
                            <input type="text">
                        </label>
                    </div>
                    <div class="cell">
                        <label>
                            Email
                            <input type="email">
                        </label>
                    </div>
                    <div class="cell">
                        <label>
                            Password
                            <input type="password">
                        </label>
                    </div>
                </div>
            </form>
            <div class="grid-x">
                <button class="hollow secondary button" type="button" data-close>Cancel</button>
                &emsp;
                <button class="button" type="button" data-close>Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

</style>