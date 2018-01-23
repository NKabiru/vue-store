<template>
    <!--<div class="reveal" id="signInModal" data-reveal>-->
        <!--<h4>Sign In</h4>-->
        <!--<form>-->
            <!--<div class="grid-x">-->
                <!--<div class="cell">-->
                    <!--<label>-->
                        <!--Email-->
                        <!--<input type="text" v-model="email">-->
                    <!--</label>-->
                <!--</div>-->
                <!--<div class="cell">-->
                    <!--<label>-->
                        <!--Password-->
                        <!--<input type="password" v-model="password">-->
                    <!--</label>-->
                <!--</div>-->
            <!--</div>-->
        <!--</form>-->
        <!--<div class="grid-x">-->
            <!--<button class="hollow secondary button" type="button" data-close>Cancel</button>-->
            <!--&emsp;-->
            <!--<button class="button" type="button" data-close @click="login">Submit</button>-->
        <!--</div>-->
        <!--<button class="close-button" data-close aria-label="Close modal" type="button">-->
            <!--<span aria-hidden="true">&times;</span>-->
        <!--</button>-->
    <!--</div>-->
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

        methods: {
            login(){
                this.$store.commit('LOGIN', {
                    email: this.email,
                    password: this.password
                });

                this.$router.push('/');

                if(!!localStorage.getItem('token')){
                    this.$message.success('Logged In');
                } else {
                    this.$message.error('Unable to login');
                }

                this.email = '';
                this.password = '';
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