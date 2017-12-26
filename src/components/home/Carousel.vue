<template>
    <div class="orbit" data-orbit>
        <div class="orbit-wrapper">
            <div class="orbit-controls">
                <button class="orbit-previous"><span class="show-for-sr"></span>&#9664;&#xFE0E;</button>
                <button class="orbit-next"><span class="show-for-sr"></span>&#9654;&#xFE0E;</button>
            </div>
            <ul class="orbit-container">
                <li class="orbit-slide">
                    <figure class="orbit-figure"><img src="https://placehold.it/1200x600/999?text=Slide-1" alt="" class="orbit-image">
                        <figcaption class="orbit-caption">Sample caption</figcaption>
                    </figure>
                </li>
                <li class="orbit-slide">
                    <figure class="orbit-figure"><img src="https://placehold.it/1200x600/999?text=Slide-4" alt="" class="orbit-image">
                        <figcaption class="orbit-caption">Sample caption</figcaption>
                    </figure>
                </li>
                <li class="orbit-slide">
                    <figure class="orbit-figure"><img src="https://placehold.it/1200x600/999?text=Slide-2" alt="" class="orbit-image">
                        <figcaption class="orbit-caption">Sample caption</figcaption>
                    </figure>
                </li>
                <li class="orbit-slide">
                    <figure class="orbit-figure"><img src="https://placehold.it/1200x600/999?text=Slide-3" alt="" class="orbit-image">
                        <figcaption class="orbit-caption">Sample caption</figcaption>
                    </figure>
                </li>
                <li class="orbit-slide">
                    <figure class="orbit-figure"><img src="https://placehold.it/1200x600/999?text=Slide-2" alt="" class="orbit-image">
                        <figcaption class="orbit-caption">Sample caption</figcaption>
                    </figure>
                </li>
            </ul>
        </div>
        <button class="button" type="button" @click="getGame(carouselGameIDs[0])">View API</button>
    </div>
</template>

<script>
    import { apiKey } from "../../api/config";
    import { baseUrl} from "../../api";
    var m  = require('mithril');

    export default {
        name: "carousel",
        data(){
            return{
                carouselGameIDs: ['3030-54134','3030-59203','3030-52647','3030-58573','3030-54144']
            }
        },
        methods: {
            getGame(gameID){
                m.jsonp({
                    url: `${ baseUrl }/game/${ gameID }/`,
                    data: {
                        api_key: apiKey,
                        format: 'jsonp',
                        field_list: 'name,deck,image'
                    },
                    callbackKey: 'json_callback'
                }).then(game => console.log(game))
            }
        }
    }
</script>