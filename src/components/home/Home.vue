<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 large-8">
                <carousel></carousel>
            </div>
            <div class="cell small-12 large-4"></div>
        </div>
    </div>
</template>

<script>
    import Carousel from './Carousel'
    export default {
        name: "home",
        components: { Carousel }
    }
</script>
