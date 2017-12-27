<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x grid-space">
            <div class="cell small-12 large-8">
                <carousel-component></carousel-component>
            </div>
            <div class="cell small-12 large-4">

            </div>
        </div>
        <div class="grid-x grid-padding-x grid-space">
            <div class="cell small-12">
                <h4>Most Popular</h4>
            </div>
            <div class="cell small-12">
                <table-component></table-component>
            </div>
        </div>
    </div>
</template>

<script>
    import CarouselComponent from './Carousel'
    import TableComponent from "./Table";
    export default {
        name: "home",
        components: {
            TableComponent,
            CarouselComponent }
    }
</script>
