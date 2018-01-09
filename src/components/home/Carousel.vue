<template>
    <!-- <el-carousel indicator-position="outside" height="25rem">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <img class="carousel-image" :src="item.image.screen_large_url">
        </el-carousel-item>
    </el-carousel> -->
    <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
  <div class="orbit-wrapper">
    <div class="orbit-controls">
      <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
      <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
    </div>
    <ul class="orbit-container">
      <li class="is-active orbit-slide">
        <figure class="orbit-figure">
          <img class="orbit-image" src="../../assets/carousel-destiny2.jpg" alt="Destiny 2">
          <figcaption class="orbit-caption">Destiny 2</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="orbit-figure">
          <img class="orbit-image" src="../../assets/carousel-shadowofwar.jpg" alt="Middle-Earth: Shadow of War">
          <figcaption class="orbit-caption">Middle-Earth: Shadow of War</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="orbit-figure">
          <img class="orbit-image" src="../../assets/carousel-callofdutyww2.jpg" alt="Call of Duty - World War Two">
          <figcaption class="orbit-caption">Call of Duty: WWII</figcaption>
        </figure>
      </li>
    </ul>
  </div>
  <nav class="orbit-bullets">
    <button class="is-active" data-slide="0"><span class="show-for-sr">Destiny 2</span><span class="show-for-sr">Current Slide</span></button>
    <button data-slide="1"><span class="show-for-sr">Middle-Earth: Shadow of War</span></button>
    <button data-slide="2"><span class="show-for-sr">Call of Duty: WWII</span></button>
  </nav>
</div>
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