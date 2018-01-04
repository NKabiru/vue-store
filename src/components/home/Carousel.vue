<template>
    <el-carousel indicator-position="outside" height="25rem">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <img class="carousel-image" :src="item.image.screen_large_url">
        </el-carousel-item>
    </el-carousel>
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
                carouselItems: '',
            }
        },

        computed:{

        },

        mounted(){
            m.jsonp({
                url: `${ baseUrl }/games/`,
                data: {
                    api_key: apiKey,
                    format: 'jsonp',
                    field_list: 'name,deck,image,guid',
                    filter:'id:59203|52647|58573'
                },
                callbackKey: 'json_callback'
            }).then(game => {
                this.carouselItems = game.results
            })
        },

        methods: {

        },

        components: {
            ElCarousel,
            ElCarouselItem
        }
    }
</script>