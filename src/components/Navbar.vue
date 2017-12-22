<template>
    <div class="top-bar bottom-shadow">
        <div class="top-bar-left">
            <ul class="menu">
                <li class="menu-text">Game Store</li>
                <li><router-link :to="{ name: 'Top Sellers'}">Top Sellers</router-link></li>
                <li><router-link :to="{ name: 'New Releases'}">New Releases</router-link></li>
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="menu">
                <li><input type="text" placeholder="Search"></li>
                <li><button class="button">Sign In</button></li>
                <li><a href="#">Cart</a></li>
            </ul>
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