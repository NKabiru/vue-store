<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <img :src="item.image.screen_large_url">
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
                carouselItems: ''
            }
        },

        mounted(){
            m.jsonp({
                url: `${ baseUrl }/games/`,
                data: {
                    api_key: apiKey,
                    format: 'jsonp',
                    field_list: 'name,deck,image,guid',
                    filter:'id:54134|59203|52647|58573|54144'
                },
                callbackKey: 'json_callback'
            }).then(game => {
                this.carouselItems = game.results
            })
        },

        components: {
            ElCarouselItem,
            ElCarousel
        }
    }
</script>