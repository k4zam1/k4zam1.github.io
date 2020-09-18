<template>
    <div class="bl_media" v-bind:class="{ 'shadow-dent':dent,'bl_media__rev':reverse}">
        <figure class="bl_media_imgWrapper">
            <img :src="imgpath" alt="イメージ">
        </figure>
        <div class="bl_media_body">
            <h3 class="bl_media_ttl">{{ title }}</h3>
            <p class="bl_media_txt" v-html="txt"></p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Media",
    props:["dent","title","imgpath","txt","reverse"]
}
</script>