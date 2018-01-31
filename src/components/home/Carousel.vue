<template>

</template>

<script>
    import ElCarousel from "element-ui/packages/carousel/src/main"
    import ElCarouselItem from "element-ui/packages/carousel/src/item"
    import { apiKey } from "../../api/config";
    import { baseUrl } from "../../api";
    let m = require('mithril');

    export default {
        name: "carousel-component",

        data() {
            return {

            }
        },

        computed:{

        },

        methods: {

        },

        components: {
            ElCarousel,
            ElCarouselItem
        }
    }
</script>