<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 large-8">
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
                </div>
            </div>
            <div class="cell small-12 large-4"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>
