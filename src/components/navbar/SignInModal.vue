<template>
    <div class="reveal" id="signInModal" data-reveal>
        <h4>Sign In</h4>
        <form>
            <div class="grid-x">
                <div class="cell">
                    <label>
                        Email
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
        <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "sign-in-modal",

        data(){
            return {
                email: '',
                password: ''
            }
        },

        mounted(){
            this.reveal = new Foundation.Reveal($('#signInModal'))
        },

        destroyed(){
            this.reveal.destroy()
        }
    }
</script>

<style scoped>

</style>