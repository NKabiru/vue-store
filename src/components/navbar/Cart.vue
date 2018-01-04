<template>
    <div class="reveal" id="cartModal">
        <template v-if="numberOfCartItems >= 1">
            <table class="unstriped">
                <thead>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <tr v-for="item in cart">
                        <td>{{ item.name }}</td>
                        <td>x 1</td>
                        <td>4000</td>
                        <td>4000</td>
                    </tr>
                </tbody>
            </table>
        </template>
        <p class="grey-text" v-else><em>No Items in the cart</em></p>
    </div>
</template>

<script>
    export default {
        name: "cart",

        computed:{
            cart(){
                return this.$store.state.cart;
            },
            numberOfCartItems(){
                return this.$store.getters.numberOfCartItems;
            }
        },

        mounted(){
            this.reveal = new Foundation.Reveal($('#cartModal'));
        },

        destroyed(){
            this.reveal.destroy();
        }
    }
</script>

<style lang="scss" scoped>
.grey-text{
    color: $dark-gray;
}
</style>