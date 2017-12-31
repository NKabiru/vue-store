<template>
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
</template>

<script>
    export default {
        name: "sign-up-modal",
        mounted(){
            this.reveal = new Foundation.Reveal($('#signUpModal'))
        },
        destroyed(){
            this.reveal.destroy()
        }
    }
</script>

<style scoped>

</style>