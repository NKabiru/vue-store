<template>
    <div class="reveal" id="addGameModal">
        <h4>Add New Game</h4>
        <div class="grid-x">
            <div class="small-12">
                <label>
                    Search
                    <input type="text">
                </label>
            </div>
            <div class="small-12"></div>
        </div>
        <div class="grid-x">
            <button class="small button">Add</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-game-modal",

        data(){
            return{

            }
        },

        mounted(){
            this.reveal = new Foundation.Reveal($('#addGameModal'));
        },

        destroyed(){
            this.reveal.destroy();
        }
    }
</script>

<style scoped>

</style>