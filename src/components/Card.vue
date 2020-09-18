<template>
    <div class="bl_card" v-bind:class="{ 'shadow-dent':dent}">
        <figure class="bl_card_imgWrapper">
            <img :src="imgpath">
        </figure>
        <div class="bl_card_body">
            <p class="bl_card_ttl">{{ title }}</p>
            <p class="bl_card_txt" v-html="txt"></p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props:["dent","title","imgpath","txt"]
}
</script>