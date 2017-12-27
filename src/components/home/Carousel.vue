<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item, index) in items" :key="index">
            <img :src="items[index].image.screen_large_url">
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
                carouselGameIDs: ['3030-54134', '3030-59203', '3030-52647', '3030-58573', '3030-54144'],
                items: []
            }
        },

        mounted(){
            for(let i = 0; i < this.carouselGameIDs.length; i++){
                m.jsonp({
                    url: `${ baseUrl }/game/${ this.carouselGameIDs[i] }/`,
                    data: {
                        api_key: apiKey,
                        format: 'jsonp',
                        field_list: 'name,deck,image,guid'
                    },
                    callbackKey: 'json_callback'
                }).then(game => {
                    this.items.push(game.results)
                })
            }
        },

        components: {
            ElCarouselItem,
            ElCarousel
        }
    }
</script>