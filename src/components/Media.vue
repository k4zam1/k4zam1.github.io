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

<style scoped>
.bl_media {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 10px;
    padding:30px;
}
.bl_media_imgWrapper {
    flex:0 1 27.58333%;
    margin-right: 3.33333%;
}
.bl_media_imgWrapper > img {
    width:100%;
}
.bl_media_body {
    flex: 1;
}
.bl_media_body > *:last-child {
    margin-bottom: 0;
}
.bl_media_ttl {
    margin-bottom: 10px;
    font-size: 1.125rem;
    font-weight: bold;
}
@media screen and (max-width:768px) {
    .bl_media {
        display: block;
    }
    .bl_media_imgWrapper {
        margin-right: 0;
        margin-bottom: 20px;
    }
}

.bl_media.bl_media__rev {
    flex-direction: row-reverse;
}
.bl_media__rev .bl_media_body {
    margin-right: 3.33333%;
    text-align: right;
}
@media screen and (max-width:768px) {
    .bl_media__rev .bl_media_body {
        margin-right:0;
    }
}
</style>