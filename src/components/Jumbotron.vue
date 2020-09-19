<template>
    <section class="container mb-5" id="top">
        <div class="text-center">
            <h1 class="el_jumbotron">{{ title }}</h1>
            <p class="el_desc" v-html="desc"></p>
            <a href="#work"><div class="el_btn el_btn-hover">WORK</div></a>
            <a href="#contact"><div class="el_btn el_btn-hover">CONTACT</div></a>
        </div>
    </section>
</template>

<script>
export default {
    name:"Jumbotron",
    props:["title","desc"]
}
</script>

<style scoped>
@font-face {
    font-family:'Decovar Regular24'; 
    src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/Decovar-VF.ttf');
}

@keyframes loadin {
    0% {
        font-variation-settings: 'SSTR' 1000;
    }
    50% {
        font-variation-settings: 'SSTR' 0;
    }
}
h1 {
    margin: 0;
    font-size: 15vw;
    font-family: "Decovar Regular24"; 
    color: white; 
    font-variation-settings: 'SSTR' 1000;
    animation: loadin 4s infinite linear;
}
#top{
    height: 80vh;
}

.el_desc {
    margin-bottom:50px;
    color:#aaa;
    font-size:2.8vw;
}
</style>