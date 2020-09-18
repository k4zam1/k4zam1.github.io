<!-- body -->
<template>
  <Navigation/>
  <main>
    <article>
      <Jumbotron title="Portfolio" desc="
        I'm a student studying CS in Japan.<br/>This is my portfolio :)"/>
      <section class="container mb-5" id="about">
        <Media dent="True" imgpath="img/analyst.svg" title="about me" txt="
          my major is computational complexity. especially i am doing research on decision trees and decision lists.
          so i'm recently interested in data science.<br/>
          now i'm studying causal reasoning, time series analysis, Bayesian modeling, deep learning, etc.<br/>
        "/>
        <Media dent="True" imgpath="img/storage.svg" title="skills" reverse="True" txt="
          Python/R/JavaScript<br/>
          DataScience/DataVisualization
        "/>
      </section>
      <section class="container mb-5" id="work">
        <div class="bl_cardUnit bl_cardUnit__col3">
          <Card imgpath="https://user-images.githubusercontent.com/56730772/88771210-dfac7e00-d1b9-11ea-8db5-5858a27850e2.png" title="Nobel Winners Visualization" txt='
             This is my first visualization project.This project is originally by <a href="https://github.com/Kyrand/dataviz-with-python-and-js">Kyrand</a>
             But it did not work because time passed so I repaired it.<br/>
             <center><a href="https://github.com/k4zam1/novel-winners-visualization">LEARN MORE</a></center> '/>
          <Card imgpath="img/coding.svg" title="furusato viz" txt="
            This is a visualization project about hometown tax(Furusato nozei)<br/><br/>
            <center>comming soon...</center>"/>
          <Card imgpath="img/coding.svg" title="comming soon..." txt="
            comming soon..."/>
        </div>
      </section>
      <Contact/>
    </article>
  </main>
  <Footer/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Jumbotron from './components/Jumbotron.vue'
import Media from './components/Media.vue'
import Card from './components/Card.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    Jumbotron,
    Media,
    Card,
    Contact
  },
}
</script>

<style>
@charset "UTF-8";
body {
    color:#343;
    font-family:sans-serif;
    line-height:1.5;
    background-color: #efefef;
}
a {
    color:#777;
    text-decoration: none;
}
a:hover {
    color:currentColor;
    text-decoration: none;
}
img {
    max-width: 100%;
    vertical-align: top;
}
</style>